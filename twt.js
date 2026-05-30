document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("mineTwtBtn");
  const status = document.getElementById("status");

  if (!btn) {
    console.error("Button not found");
    return;
  }

  btn.addEventListener("click", () => {
    status.textContent =
      "Simulation started (demo only)";
  });

});