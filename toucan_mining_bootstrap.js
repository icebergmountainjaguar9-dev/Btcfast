// toucan_mining_bootstrap.js

(function () {

  let mining = false;
  let balance = 0;
  let timer = null;

  function getWalletInput() {
    return document.querySelector(
      'input[placeholder*="0x"], input'
    );
  }

  function getStartButtons() {

    return Array.from(
      document.querySelectorAll("button")
    ).filter(btn =>
      btn.textContent
        .toLowerCase()
        .includes("start mining")
    );

  }

  function getBalanceNode() {

    const nodes =
      document.querySelectorAll("*");

    for (const node of nodes) {

      if (
        node.children.length === 0 &&
        node.textContent.includes(
          "0.0000"
        )
      ) {
        return node;
      }

    }

    return null;
  }

  function updateBalance() {

    const node =
      getBalanceNode();

    if (!node) return;

    node.textContent =
      balance.toFixed(6) +
      " BCT";

  }

  function startMining() {

    if (mining) return;

    const wallet =
      getWalletInput();

    if (
      !wallet ||
      wallet.value.trim().length < 10
    ) {
      alert(
        "Enter wallet address first."
      );
      return;
    }

    mining = true;

    balance = 0;

    timer = setInterval(() => {

      balance += 0.0001;

      updateBalance();

    }, 1000);

    console.log(
      "Toucan mining started"
    );

    if (
      typeof startToucanGrowth ===
      "function"
    ) {
      startToucanGrowth();
    }

  }

  function attachMining() {

    const buttons =
      getStartButtons();

    buttons.forEach(btn => {

      btn.onclick = null;

      btn.addEventListener(
        "click",
        startMining
      );

    });

  }

  document.addEventListener(
    "DOMContentLoaded",
    attachMining
  );

  window.startToucanMining =
    startMining;

})();