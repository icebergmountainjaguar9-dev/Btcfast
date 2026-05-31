let mining = false;
let balance = 0;

function startMining(){

    if(mining) return;

    mining = true;

    document.getElementById("status").innerHTML =
    "🔍 Polygon Scan Active";

    setInterval(() => {

        balance += Math.random() * 5;

        document.getElementById("progress").innerHTML =
        balance.toFixed(4) + " SBORG";

    },1000);

    createBills();
}

function createBills(){

    const bills = [
        "💵1000 CHF",
        "💴200 CHF"
    ];

    setInterval(() => {

        const bill = document.createElement("div");

        bill.className = "bill";

        bill.innerHTML =
        bills[Math.floor(Math.random()*bills.length)];

        bill.style.left =
        Math.random()*100 + "vw";

        bill.style.animationDuration =
        (5 + Math.random()*10) + "s";

        document.body.appendChild(bill);

        setTimeout(()=>{
            bill.remove();
        },15000);

    },300);
}