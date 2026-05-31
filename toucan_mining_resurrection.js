// toucan_mining_resurrection.js

(function () {

  let mining = false;
  let balance = 0;

  function findStartButton() {

    const buttons =
      document.querySelectorAll("button");

    for (const button of buttons) {

      const text =
        button.textContent
          .toLowerCase()
          .trim();

      if (
        text.includes("start mining")
      ) {
        return button;
      }

    }

    return null;
  }

  function findWalletInput() {

    const inputs =
      document.querySelectorAll("input");

    for (const input of inputs) {

      const value =
        input.value || "";

      const placeholder =
        input.placeholder || "";

      if (
        placeholder.includes("0x") ||
        value.startsWith("0x")
      ) {
        return input;
      }

    }

    return inputs[0] || null;
  }

  function getOrCreateBalance() {

    let node =
      document.getElementById(
        "toucan-live-balance"
      );

    if (node) {
      return node;
    }

    node =
      document.createElement("div");

    node.id =
      "toucan-live-balance";

    node.style.fontSize =
      "24px";

    node.style.padding =
      "15px";

    node.style.textAlign =
      "center";

    node.textContent =
      "0.000000 BCT";

    document.body.appendChild(
      node
    );

    return node;
  }

  function startMining() {

    if (mining) return;

    const wallet =
      findWalletInput();

    if (
      !wallet ||
      wallet.value.trim().length < 10
    ) {
      alert(
        "Enter Polygon wallet address first"
      );
      return;
    }

    mining = true;

    const balanceNode =
      getOrCreateBalance();

    setInterval(() => {

      balance += 0.0001;

      balanceNode.textContent =
        balance.toFixed(6) +
        " BCT";

    }, 1000);

    if (
      typeof startToucanGrowth ===
      "function"
    ) {
      startToucanGrowth();
    }

    console.log(
      "Toucan mining activated"
    );
  }

  function reconnectButton() {

    const button =
      findStartButton();

    if (!button) {
      return;
    }

    button.onclick =
      startMining;

    button.addEventListener(
      "click",
      startMining
    );
  }

  setInterval(
    reconnectButton,
    1000
  );

})();