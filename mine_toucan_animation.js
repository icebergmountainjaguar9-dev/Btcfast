// mine_toucan_animation.js

document.addEventListener("DOMContentLoaded", () => {

  if (
    typeof window.isMineToucanPage !==
    "function"
  ) {
    return;
  }

  if (
    !window.isMineToucanPage()
  ) {
    return;
  }

  const existing =
    document.getElementById(
      "mine-toucan-animation"
    );

  if (existing) {
    return;
  }

  const box =
    document.createElement("div");

  box.id =
    "mine-toucan-animation";

  box.style.textAlign =
    "center";

  box.style.fontSize =
    "48px";

  box.style.padding =
    "20px";

  document.body.prepend(box);

  const stages = [
    "🥚",
    "🐣",
    "(•◦•) 🐥",
    "(•ᴗ•) 🐦",
    "(•‿•) 🦜",
    "🦜✨",
    "🦜🌿✨",
    "🦜👑"
  ];

  let index = 0;

  setInterval(() => {

    box.textContent =
      stages[index];

    index =
      (index + 1) %
      stages.length;

  }, 1000);

});