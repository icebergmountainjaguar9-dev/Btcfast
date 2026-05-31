// toucan_page_display.js

document.addEventListener("DOMContentLoaded", () => {

  const display = document.createElement("div");

  display.id = "toucanAutoGrowth";

  display.style.fontSize = "42px";
  display.style.textAlign = "center";
  display.style.marginTop = "25px";
  display.style.marginBottom = "25px";

  const heading =
    document.createElement("h2");

  heading.textContent =
    "🦜 Growing Toucan";

  document.body.appendChild(heading);
  document.body.appendChild(display);

});