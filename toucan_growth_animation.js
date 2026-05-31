// toucan_growth_animation.js

document.addEventListener("DOMContentLoaded", () => {

  const container = document.createElement("div");

  container.id = "toucanGrowth";

  container.style.fontSize = "32px";
  container.style.textAlign = "center";
  container.style.marginTop = "20px";

  document.body.appendChild(container);

  const stages = [
    "(•◦•) 🥚",
    "(•◦•) 🐣",
    "(•ᴗ•) 🐥",
    "(•◉•) 🐦",
    "(•◡•) 🐦🌿",
    "(•▽•) 🐦🌿🌿",
    "(•‿•) 🐦🍃🌿",
    "(•⌄•) 🦜🍃",
    "(•⌄•) 🐧❌",
    "(•⌄•) 🐦🟢",
    "(•⌄•) 🐦🟢🟡",
    "(•⌄•) 🐦🟢🟡🟠",
    "(•⌄•) 🐦🟢🟡🟠⭐",
    "(•⌄•) 🐦🟢🟡🟠✨",
    "🐦 (•⌄•)♡",
    "🦜 (•⌄•)♡",
    "🐦🌿 (•⌄•)♡",
    "🐦🌿⭐ (•⌄•)♡",
    "🐦🌿⭐✨ (•⌄•)♡",
    "🦜 TOUCAN FULLY GROWN ♡"
  ];

  let interval;

  window.startToucanGrowth = function () {

    clearInterval(interval);

    let index = 0;

    container.innerHTML = stages[0];

    interval = setInterval(() => {

      index++;

      if (index >= stages.length) {
        clearInterval(interval);
        return;
      }

      container.innerHTML = stages[index];

    }, 1000);

  };

});