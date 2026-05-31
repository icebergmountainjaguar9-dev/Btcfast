// mine_avalanche_banner.js

document.addEventListener("DOMContentLoaded", () => {

  if (
    !window.location.href
      .toLowerCase()
      .includes("mine-avalanche")
  ) {
    return;
  }

  const banner =
    document.createElement("div");

  banner.innerHTML =
    "🏔️ Avalanche Snowboarding Simulator 🏂";

  banner.style.textAlign =
    "center";

  banner.style.fontSize =
    "28px";

  banner.style.fontWeight =
    "bold";

  banner.style.margin =
    "20px";

  document.body.prepend(banner);

});