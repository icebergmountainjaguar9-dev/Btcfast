// MineBitcoin.jsx

const USER_SHARE_PERCENT = 2.9;

function handleMining(address) {
  const simulatedReward = Math.random() * 0.01; // simulated BTC reward

  const payout = simulatedReward * (USER_SHARE_PERCENT / 100);

  return {
    address,
    reward: simulatedReward,
    payout,
    percentage: USER_SHARE_PERCENT,
  };
}