// mine_toucan_growth_only.js

(function () {

  const url =
    window.location.href
      .toLowerCase();

  if (
    !url.includes(
      "mine-toucan"
    )
  ) {
    return;
  }

  const box =
    document.createElement("div");

  box.id =
    "mine-toucan-growth";

  box.style.textAlign =
    "center";

  box.style.fontSize =
    "48px";

  box.style.margin =
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

  let i = 0;

  setInterval(() => {

    box.textContent =
      stages[i];

    i =
      (i + 1) %
      stages.length;

  }, 1200);

})();