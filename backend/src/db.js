const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const DB_FILE = process.env.DATABASE || path.join(__dirname, '..', 'data.sqlite');

if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, '');
}

const db = new sqlite3.Database(DB_FILE);

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      address TEXT PRIMARY KEY,
      balance REAL DEFAULT 0
    )`
  );
});

function addUser(address) {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT OR IGNORE INTO users(address, balance) VALUES(?, ?)',
      [address, 0],
      function (err) {
        if (err) return reject(err);
        resolve();
      }
    );
  });
}

function addBalance(address, amount) {
  return new Promise((resolve, reject) => {
    db.run(
      'UPDATE users SET balance = balance + ? WHERE address = ?',
      [amount, address],
      function (err) {
        if (err) return reject(err);
        // ensure user exists
        if (this.changes === 0) {
          addUser(address)
            .then(() => addBalance(address, amount))
            .then(resolve)
            .catch(reject);
        } else {
          resolve();
        }
      }
    );
  });
}

function getBalance(address) {
  return new Promise((resolve, reject) => {
    db.get('SELECT balance FROM users WHERE address = ?', [address], (err, row) => {
      if (err) return reject(err);
      resolve(row ? row.balance : 0);
    });
  });
}

function listUsers() {
  return new Promise((resolve, reject) => {
    db.all('SELECT address, balance FROM users', (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

module.exports = { addUser, addBalance, getBalance, listUsers };
