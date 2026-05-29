/**
 * Minimal stratum proxy scaffold.
 * This file provides a starting point for integrating with an upstream Stratum pool
 * or emitting simulated shares when `SIMULATE_SHARES=true` in the environment.
 *
 * WARNING: This is only scaffolding. For production use you must integrate
 * with a battle-tested Stratum library and properly validate and credit shares.
 */

const EventEmitter = require('events');
const db = require('./db');

class StratumProxy extends EventEmitter {
  constructor() {
    super();
    this.simulate = process.env.SIMULATE_SHARES === 'true';
    this.running = false;
  }

  start() {
    this.running = true;
    if (this.simulate) {
      this._startSimulation();
    } else {
      // TODO: integrate with an upstream Stratum pool using a library like `stratum-client`
      // Example integration points:
      // - connect to upstream pool with credentials from env
      // - accept miner connections (local Stratum server) and forward shares
      // - on valid share, emit 'share' event: { address, reward }
      console.log('Stratum proxy started in real mode. Implement Stratum client integration.');
    }
  }

  stop() {
    this.running = false;
    if (this.simTimer) clearInterval(this.simTimer);
  }

  _startSimulation() {
    console.log('Stratum proxy running in simulation mode. Emitting fake shares every 12s.');
    // Emit a simulated share credited to a random registered address every 12s
    this.simTimer = setInterval(async () => {
      try {
        const users = await db.listUsers();
        if (!users || users.length === 0) return;
        const target = users[Math.floor(Math.random() * users.length)];
        const simulatedReward = parseFloat((Math.random() * 0.0005 + 0.00005).toFixed(8));
        await db.addBalance(target.address, simulatedReward);
        this.emit('share', { address: target.address, reward: simulatedReward });
      } catch (err) {
        console.error('Simulation error', err);
      }
    }, 12000);
  }
}

module.exports = new StratumProxy();
