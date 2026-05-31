// avalanche_animation_recovery.js

(function () {

  function startAnimation() {

    const existing =
      document.getElementById(
        "avalanche-debug-animation"
      );

    if (existing) {
      return;
    }

    const container =
      document.createElement("div");

    container.id =
      "avalanche-debug-animation";

    container.style.position =
      "fixed";

    container.style.top =
      "20px";

    container.style.left =
      "20px";

    container.style.zIndex =
      "999999";

    container.style.background =
      "#ffffff";

    container.style.padding =
      "20px";

    container.style.fontSize =
      "42px";

    container.style.border =
      "4px solid black";

    document.body.appendChild(
      container
    );

    const frames = [
      "🏔️🏂",
      "🏔️🏂💨",
      "🏔️⚡🏂",
      "🏔️😲🏂",
      "🏔️🤸",
      "🏔️💥",
      "🏔️🏂",
      "🏔️😵",
      "🏔️💥",
      "🏔️🏂✨"
    ];

    let i = 0;

    setInterval(() => {

      container.textContent =
        frames[i];

      i++;

      if (
        i >= frames.length
      ) {
        i = 0;
      }

    }, 800);

  }

  window.addEventListener(
    "load",
    startAnimation
  );

})();