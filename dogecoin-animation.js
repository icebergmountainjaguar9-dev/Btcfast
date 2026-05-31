// dogecoin-animation.js

document.addEventListener("DOMContentLoaded", () => {

    const container = document.createElement("div");
    container.id = "dogecoin-scene";

    container.style.position = "relative";
    container.style.width = "100%";
    container.style.height = "300px";
    container.style.overflow = "hidden";
    container.style.background = "#111827";

    document.body.prepend(container);

    const dog = document.createElement("div");
    dog.innerHTML = "🐕";
    dog.style.position = "absolute";
    dog.style.left = "50%";
    dog.style.top = "50%";
    dog.style.fontSize = "80px";
    dog.style.transformOrigin = "center center";

    container.appendChild(dog);

    let angle = 0;

    setInterval(() => {
        angle += 10;
        dog.style.transform =
            `translate(-50%, -50%) rotate(${angle}deg)`;
    }, 50);

    for (let i = 0; i < 40; i++) {

        const coin = document.createElement("div");

        coin.innerHTML = "🪙";

        coin.style.position = "absolute";
        coin.style.left = Math.random() * 100 + "%";
        coin.style.top = Math.random() * 100 + "%";
        coin.style.fontSize =
            (20 + Math.random() * 30) + "px";

        container.appendChild(coin);

        let y = parseFloat(coin.style.top);

        setInterval(() => {

            y -= 0.2;

            if (y < -10) {
                y = 110;
            }

            coin.style.top = y + "%";

        }, 30);
    }

});