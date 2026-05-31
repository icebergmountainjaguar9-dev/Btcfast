// mine_avalanche_snowboard_animation.js

document.addEventListener("DOMContentLoaded", () => {

  const url = window.location.href.toLowerCase();

  if (
    !url.includes("mine-avalanche")
  ) {
    return;
  }

  const container =
    document.createElement("div");

  container.id =
    "avalanche-animation";

  container.style.textAlign =
    "center";

  container.style.fontSize =
    "48px";

  container.style.margin =
    "20px";

  document.body.prepend(container);

  const scenes = [

    `
🏔️🏔️🏔️
   🏂
`,
    `
🏔️🏔️🏔️
      🏂
`,
    `
🏔️🏔️🏔️
         🏂
`,
    `
🏔️🏔️🏔️
          🏂💨
`,
    `
🏔️🏔️🏔️
           ⚡🏂
`,
    `
🏔️🏔️🏔️
            😲🏂
`,
    `
🏔️🏔️🏔️
             🤸
`,
    `
🏔️🏔️🏔️
            💥
`,
    `
🏔️🏔️🏔️
           🏂
`,
    `
🏔️🏔️🏔️
              😵
`,
    `
🏔️🏔️🏔️
               💥
`,
    `
🏔️🏔️🏔️
                🏂✨
`
  ];

  let frame = 0;

  setInterval(() => {

    container.innerHTML =
      "<pre>" +
      scenes[frame] +
      "</pre>";

    frame++;

    if (
      frame >= scenes.length
    ) {
      frame = 0;
    }

  }, 900);

});