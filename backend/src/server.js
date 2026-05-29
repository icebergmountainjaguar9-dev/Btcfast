require('dotenv').config();
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const stratum = require('./stratumProxy');
const db = require('./db');

const ADMIN_KEY = process.env.ADMIN_API_KEY || 'change-me';

const app = express();
app.use(bodyParser.json());

app.get('/status', async (req, res) => {
  res.json({ ok: true, simulateShares: process.env.SIMULATE_SHARES === 'true' });
});

app.post('/register', async (req, res) => {
  const { address } = req.body;
  if (!address || typeof address !== 'string') {
    return res.status(400).json({ error: 'address is required' });
  }
  try {
    await db.addUser(address);
    res.json({ ok: true, address });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

app.get('/balance/:address', async (req, res) => {
  const address = req.params.address;
  const bal = await db.getBalance(address);
  res.json({ address, balance: bal });
});

// Admin-triggered payout (for demo). In production, implement secure payout workflows.
app.post('/payout', async (req, res) => {
  const key = req.headers['x-admin-key'] || req.body.adminKey;
  if (key !== ADMIN_KEY) return res.status(401).json({ error: 'unauthorized' });
  const { address, amount } = req.body;
  if (!address || typeof amount !== 'number') return res.status(400).json({ error: 'address and amount required' });
  try {
    // For safety this endpoint only deducts balance locally. Real payouts require an on-chain transaction.
    const bal = await db.getBalance(address);
    if (amount > bal) return res.status(400).json({ error: 'insufficient balance' });
    await db.addBalance(address, -amount);
    // TODO: integrate with a Bitcoin wallet/service to broadcast on-chain payouts.
    res.json({ ok: true, address, paid: amount });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

app.get('/users', async (req, res) => {
  const users = await db.listUsers();
  res.json({ users });
});

// Start server and stratum proxy
const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
  try {
    stratum.start();
    stratum.on('share', (s) => {
      console.log('Share credited:', s);
    });
  } catch (err) {
    console.error('Stratum proxy failed to start', err);
  }
});
