// toucan_growth_container_fix.js

document.addEventListener("DOMContentLoaded", () => {

  const section = document.createElement("div");

  section.id = "toucan-growth-area";

  section.innerHTML = `
    <h2>🦜 Growing Toucan</h2>
    <div id="toucan-stage"
         style="
           font-size:48px;
           padding:20px;
           text-align:center;
           border:2px solid #4CAF50;
           border-radius:12px;
           margin:20px 0;">
      🥚
    </div>
  `;

  document.body.appendChild(section);

});