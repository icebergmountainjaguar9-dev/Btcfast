const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");

const startBtn = document.getElementById("startBtn");
const coordsCounter = document.getElementById("coords");
const rewardCounter = document.getElementById("reward");

let mining = false;
let coordinatesFound = 0;
let rewards = 0;

function drawGrid() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.strokeStyle="#ddd";

    for(let x=0;x<canvas.width;x+=50){
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x,canvas.height);
        ctx.stroke();
    }

    for(let y=0;y<canvas.height;y+=50){
        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(canvas.width,y);
        ctx.stroke();
    }

    ctx.strokeStyle="#000";

    ctx.beginPath();
    ctx.moveTo(canvas.width/2,0);
    ctx.lineTo(canvas.width/2,canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0,canvas.height/2);
    ctx.lineTo(canvas.width,canvas.height/2);
    ctx.stroke();
}

drawGrid();

function generateCoordinate(){

    if(!mining) return;

    let x = Math.floor(Math.random()*canvas.width);
    let y = Math.floor(Math.random()*canvas.height);

    ctx.fillStyle="#00aa55";
    ctx.beginPath();
    ctx.arc(x,y,5,0,Math.PI*2);
    ctx.fill();

    ctx.fillStyle="#222";
    ctx.font="12px Arial";
    ctx.fillText(
        `(${x-canvas.width/2},${canvas.height/2-y})`,
        x+8,
        y-8
    );

    coordinatesFound++;
    rewards += 0.0002;

    coordsCounter.textContent = coordinatesFound;
    rewardCounter.textContent = rewards.toFixed(4) + " GRT";
}

startBtn.addEventListener("click",()=>{

    const wallet =
        document.getElementById("wallet").value.trim();

    if(wallet.length < 10){
        alert("Enter Polygon Wallet Address");
        return;
    }

    mining = true;

    startBtn.textContent =
        "Graph Token Mining Running...";
});

setInterval(generateCoordinate,500);