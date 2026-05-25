const txForm = document.getElementById('txForm');
const txHashInput = document.getElementById('txHash');
const resultBox = document.getElementById('result');

const accelerationSources = [
  'Mempool Express',
  'Relay Network Booster',
  'TX Push Channel',
  'Priority Fee Matcher',
  'Accelerated Broadcast'
];

function isValidTxHash(value) {
  return /^[A-Fa-f0-9]{64}$/.test(value.trim());
}

function showResult(message, type = 'success') {
  resultBox.className = `result ${type}`;
  resultBox.textContent = message;
  resultBox.classList.remove('hidden');
}

function hideResult() {
  resultBox.className = 'result hidden';
  resultBox.textContent = '';
}

function simulateAcceleration(hash) {
  const lines = [];
  accelerationSources.forEach((source, index) => {
    const delay = 700 + index * 450;
    window.setTimeout(() => {
      lines.push(`✔ ${source} confirmed acceleration request.`);
      showResult(lines.join('\n'), 'success');
    }, delay);
  });

  const finalDelay = 700 + accelerationSources.length * 450 + 400;
  window.setTimeout(() => {
    showResult(
      `Transaction ${hash} successfully accelerated in the mempool.\n` +
        'A successful acceleration confirmation has been issued from multiple sources.',
      'success'
    );
    txForm.querySelector('button').disabled = false;
  }, finalDelay);
}

const tabButtons = document.querySelectorAll('.tab-button');
const donationFeedback = document.getElementById('donationFeedback');
const copyAddressBtn = document.getElementById('copyAddressBtn');
const btcAddressCode = document.getElementById('btcAddress');

function setActiveTab(targetId) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.target === targetId;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
  document.querySelectorAll('.tab-panel').forEach((panel) => {
    panel.classList.toggle('active', panel.id === targetId);
  });
  if (targetId === 'donationPanel' && donationFeedback) {
    donationFeedback.textContent = '';
  }
}

function copyDonationAddress() {
  const address = btcAddressCode.textContent.trim();
  if (!address) {
    return;
  }

  navigator.clipboard
    .writeText(address)
    .then(() => {
      if (donationFeedback) {
        donationFeedback.textContent = 'Bitcoin address copied to clipboard.';
      }
    })
    .catch(() => {
      if (donationFeedback) {
        donationFeedback.textContent = 'Copy failed. Please select and copy the address manually.';
      }
    });
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => setActiveTab(button.dataset.target));
});

if (copyAddressBtn) {
  copyAddressBtn.addEventListener('click', copyDonationAddress);
}

function startAcceleration(event) {
  event.preventDefault();
  hideResult();

  const hash = txHashInput.value.trim();
  if (!isValidTxHash(hash)) {
    showResult(
      'Please enter a valid 64-character Bitcoin transaction hash consisting of hexadecimal characters.',
      'error'
    );
    return;
  }

  txForm.querySelector('button').disabled = true;
  showResult('Preparing acceleration across multiple mempool sources...', 'success');
  simulateAcceleration(hash);
}

txForm.addEventListener('submit', startAcceleration);
