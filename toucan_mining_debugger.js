// toucan_mining_debugger.js

document.addEventListener("DOMContentLoaded", () => {

  console.log("Toucan Debugger Loaded");

  document.addEventListener("click", (event) => {

    const target = event.target;

    if (
      target.tagName === "BUTTON" &&
      target.textContent.includes("Start Mining")
    ) {

      console.log("Start Mining button clicked");

      alert("Start Mining click detected");

    }

  });

});