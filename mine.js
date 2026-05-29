const mineForm = document.getElementById('mineForm');
const btcAddressInput = document.getElementById('btcAddress');
const payoutShareInput = document.getElementById('payoutShare');
const shareValue = document.getElementById('shareValue');
const mineResult = document.getElementById('mineResult');
const mineFeedback = document.getElementById('mineFeedback');
const simAddressCode = document.getElementById('simAddress');
const copyPayoutAddressBtn = document.getElementById('copyPayoutAddressBtn');

function isValidBitcoinAddress(value) {
  const address = value.trim();
  const bech32 = /^(bc1)[ac-hj-np-z02-9]{25,39}$/i;
  const legacy = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
  return bech32.test(address) || legacy.test(address);
}

function showMineResult(message, type = 'success') {
  mineResult.className = `result ${type}`;
  mineResult.textContent = message;
  mineResult.classList.remove('hidden');
}

function hideMineResult() {
  mineResult.className = 'result hidden';
  mineResult.textContent = '';
}

function updateShareValue() {
  shareValue.textContent = payoutShareInput.value;
}

function copyPayoutAddress() {
  const address = simAddressCode.textContent.trim();
  if (!address || address.startsWith('Enter your Bitcoin address')) {
    mineFeedback.textContent = 'Enter a valid address first to copy it.';
    return;
  }

  navigator.clipboard
    .writeText(address)
    .then(() => {
      mineFeedback.textContent = 'Bitcoin address copied to clipboard.';
    })
    .catch(() => {
      mineFeedback.textContent = 'Copy failed. Please select and copy the address manually.';
    });
}

function simulateMining(address, sharePercent) {
  const estimatedReward = parseFloat((Math.random() * 0.0009 + 0.00012).toFixed(8));
  const payoutAmount = parseFloat((estimatedReward * (sharePercent / 100)).toFixed(8));

  simAddressCode.textContent = address;
  mineFeedback.textContent = '';
  showMineResult('Preparing mining hardware and validating your address...', 'success');
  mineForm.querySelector('button').disabled = true;

  const steps = [
    'Connecting to mining pool...',
    'Calculating block reward share...',
    'Mining in progress. This is a simulated result.',
    'Finalizing payout estimate...',
  ];

  steps.forEach((step, index) => {
    window.setTimeout(() => {
      showMineResult(step, 'success');
    }, 900 * (index + 1));
  });

  window.setTimeout(() => {
    showMineResult(
      `Simulation complete. Estimated mined reward: ${estimatedReward} BTC.\n` +
        `${payoutAmount} BTC (${sharePercent}%) would be sent to ${address}.`,
      'success'
    );
    mineForm.querySelector('button').disabled = false;
  }, 900 * (steps.length + 1));
}

function startMining(event) {
  event.preventDefault();
  hideMineResult();

  const address = btcAddressInput.value.trim();
  const sharePercent = Number(payoutShareInput.value);

  if (!isValidBitcoinAddress(address)) {
    showMineResult('Please enter a valid Bitcoin address in legacy or bech32 format.', 'error');
    return;
  }

  if (sharePercent < 1 || sharePercent > 50) {
    showMineResult('Please choose a payout share between 1% and 50%.', 'error');
    return;
  }

  simulateMining(address, sharePercent);
}

if (payoutShareInput) {
  payoutShareInput.addEventListener('input', updateShareValue);
}

if (copyPayoutAddressBtn) {
  copyPayoutAddressBtn.addEventListener('click', copyPayoutAddress);
}

if (mineForm) {
  mineForm.addEventListener('submit', startMining);
}
