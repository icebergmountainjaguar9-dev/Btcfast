document.getElementById("mineBtn").addEventListener("click", () => {

    const wallet = document.getElementById("wallet").value;

    if (!wallet) {
        alert("Please enter a wallet address.");
        return;
    }

    const reward = (Math.random() * 2 + 0.1).toFixed(4);

    document.getElementById("result").innerHTML = `
        <div class="success">
            <h3>Simulation Complete</h3>
            <p><strong>Wallet:</strong> ${wallet}</p>
            <p><strong>Simulated Reward:</strong> ${reward} SOL</p>
            <p><strong>Status:</strong> Success</p>
            <p>This is a demonstration simulation only.</p>
        </div>
    `;
});