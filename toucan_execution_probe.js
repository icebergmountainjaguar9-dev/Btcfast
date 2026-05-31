// toucan_execution_probe.js

// alert("TOUCAN EXECUTION PROBE LOADED");

document.body.style.backgroundColor =
  "#e8ffe8";

const probe = document.createElement("div");

probe.innerHTML = `
<h1>🦜 TOUCAN SCRIPT RUNNING</h1>
`;

probe.style.position = "fixed";
probe.style.top = "20px";
probe.style.left = "20px";
probe.style.zIndex = "999999";
probe.style.background = "lime";
probe.style.padding = "20px";

document.body.appendChild(probe);