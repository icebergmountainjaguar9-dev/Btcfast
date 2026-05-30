const kaomojis = [
  "(＾▽＾)",
  "(✿◠‿◠)",
  "(づ｡◕‿‿◕｡)づ",
  "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
  "(^▽^)"
];

function randomKaomoji() {
  return kaomojis[
    Math.floor(Math.random() * kaomojis.length)
  ];
}

setInterval(() => {
  const el = document.getElementById("kaomoji");
  if (el) {
    el.textContent = randomKaomoji();
  }
}, 2000);