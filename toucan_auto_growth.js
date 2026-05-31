// toucan_auto_growth.js

document.addEventListener("DOMContentLoaded", () => {

  const container =
    document.getElementById("toucanAutoGrowth");

  if (!container) return;

  const stages = [
    "🥚",
    "(•◦•) 🐣",
    "(•ᴗ•) 🐥",
    "(•◉•) 🐦",
    "(•‿•) 🐦🌿",
    "(•⌄•) 🐦🍃",
    "(•▽•) 🐦🌿⭐",
    "(•‿•) 🦜✨",
    "🦜 (•‿•) ♡",
    "🦜🌿⭐✨ ♡"
  ];

  let index = 0;

  container.innerHTML = stages[0];

  setInterval(() => {

    index++;

    if (index >= stages.length) {
      index = stages.length - 1;
    }

    container.innerHTML = stages[index];

  }, 1500);

});