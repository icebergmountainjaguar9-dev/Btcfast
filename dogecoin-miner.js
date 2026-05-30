document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("startMining");

    button.addEventListener("click", () => {

        const address =
            document.getElementById("dogeAddress").value;

        const result =
            document.getElementById("miningResult");

        if (!address) {

            result.innerHTML =
                "<p>Please enter a wallet address.</p>";

            return;
        }

        result.innerHTML =
            "<p>Connecting to Dogecoin mining pool...</p>";

        setTimeout(() => {

            const reward =
                (Math.random() * 25 + 5).toFixed(2);

            result.innerHTML = `
                <div class="success">
                    <h3>Mining Complete</h3>

                    <p>Wallet: ${address}</p>

                    <p>Reward: ${reward} DOGE</p>

                    <p>Status: Confirmed</p>
                </div>
            `;

        }, 3000);

    });

});