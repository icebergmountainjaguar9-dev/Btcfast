// toucan_page_override.js

(function () {

  const path =
    window.location.pathname
      .toLowerCase();

  const isMineToucanPage =
    path.includes("mine-toucan");

  if (!isMineToucanPage) {
    return;
  }

  console.log(
    "Mine Toucan page detected"
  );

  const banner =
    document.createElement("div");

  banner.id =
    "toucan-growth-container";

  banner.style.margin =
    "20px auto";

  banner.style.padding =
    "20px";

  banner.style.textAlign =
    "center";

  banner.style.fontSize =
    "48px";

  banner.innerHTML = "🥚";

  document.body.appendChild(
    banner
  );

  const stages = [
    "🥚",
    "🐣",
    "(•◦•) 🐥",
    "(•ᴗ•) 🐦",
    "(•◉•) 🐦🌿",
    "(•▽•) 🐦🍃",
    "(•‿•) 🦜",
    "🦜✨",
    "🦜🌿✨",
    "🦜👑"
  ];

  let index = 0;

  setInterval(() => {

    banner.innerHTML =
      stages[index];

    index++;

    if (
      index >= stages.length
    ) {
      index = 0;
    }

  }, 1200);

})();