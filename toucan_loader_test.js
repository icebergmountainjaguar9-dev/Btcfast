// toucan_loader_test.js

document.addEventListener("DOMContentLoaded", () => {

  const banner = document.createElement("div");

  banner.style.position = "fixed";
  banner.style.top = "10px";
  banner.style.right = "10px";
  banner.style.padding = "15px";
  banner.style.background = "lime";
  banner.style.color = "black";
  banner.style.fontWeight = "bold";
  banner.style.zIndex = "999999";

  banner.textContent =
    "TOUCAN LOADER TEST SUCCESS";

  document.body.appendChild(banner);

  console.log(
    "TOUCAN LOADER TEST SUCCESS"
  );

});