const miningMessages = {

DOGE: [
"🐕 Mining Dogecoin...",
"ᕕ( ᐛ )ᕗ Fetching blocks...",
"(◕ᴥ◕) DOGE found a share!",
"ฅ^•ﻌ•^ฅ Mining happily...",
"🐾 Much hash. Very wow."
],

BCT: [
"🦜 Mining Toucan Protocol...",
"(•ө•) Carbon credits detected...",
"🦜 Flying through Polygon...",
"ヽ(•‿•)ノ Green rewards incoming...",
"🌱 Sustainability block accepted."
],

ETH: [
"⟠ Mining Ethereum...",
"(ง'̀-'́)ง Processing shares...",
"⚡ Hashrate increasing...",
"(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ETH reward found!",
"🚀 New block candidate detected."
]
};

function randomMessage(token){

const messages =
miningMessages[token];

return messages[
Math.floor(
Math.random() *
messages.length
)
];
}