// mine_toucan_detector.js

window.isMineToucanPage = function () {

  const url =
    window.location.href.toLowerCase();

  return (
    url.includes("/mine-toucan") ||
    url.endsWith("mine-toucan") ||
    url.includes("mine-toucan.html")
  );

};