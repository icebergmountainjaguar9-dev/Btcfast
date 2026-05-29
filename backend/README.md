Backend scaffold for BTCfast

This folder contains a minimal scaffold to integrate a Stratum proxy, track user shares, and manage payouts.

Important: This is scaffolding only. Running a real mining operation requires ASIC hardware or rented hash power, a configured Stratum pool, and a secure payout wallet.

Quick start (development / simulation):

1. Copy `.env.example` to `.env` and edit values as needed.
2. Install dependencies:

```bash
cd backend
npm install
```

3. Run the server (simulation mode by default with `SIMULATE_SHARES=true`):

```bash
npm start
```

API endpoints:
- `GET /status` — health and mode
- `POST /register` — body: `{ "address": "bc1..." }` to register an address
- `GET /balance/:address` — get registered balance for address
- `GET /users` — list users and balances
- `POST /payout` — admin-only (header `x-admin-key`) to deduct balance and simulate payout

Next steps to integrate real mining:
- Replace `stratumProxy.js` simulation with a real Stratum client/server integration.
- Implement secure on-chain payouts using a Bitcoin wallet or custodial service.
- Add authentication, rate-limiting, and anti-fraud measures.
