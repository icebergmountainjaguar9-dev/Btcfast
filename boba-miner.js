let mining = false;
let balance = 0;

function startMining(){

    const address =
        document.getElementById("polygonAddress")
        .value
        .trim();

    if(address === ""){
        alert(
          "Please enter your Polygon address first."
        );
        return;
    }

    if(!address.startsWith("0x")){
        alert(
          "Polygon address must begin with 0x"
        );
        return;
    }

    if(mining) return;

    mining = true;

    document.getElementById("status").innerHTML =
        "🧋 Polygon Scan Running<br>" + address;

    setInterval(() => {

        balance +=
            Math.random() * 2;

        document.getElementById("balance")
        .innerHTML =
            balance.toFixed(4) +
            " BOBA";

    },1000);
}