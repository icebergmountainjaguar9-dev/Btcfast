// toucan_growth_loop_fix.js

document.addEventListener("DOMContentLoaded", () => {

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

  function startAnimation() {

    const stage =
      document.getElementById("toucan-stage");

    if (!stage) {
      console.log("Toucan stage missing");
      return;
    }

    let index = 0;

    setInterval(() => {

      stage.innerHTML =
        stages[index];

      index++;

      if (index >= stages.length) {
        index = 0;
      }

    }, 1200);

  }

  setTimeout(startAnimation, 1000);

});