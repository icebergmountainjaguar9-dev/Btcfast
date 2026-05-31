let bobaBalance =
    Number(localStorage.getItem("bobaBalance")) || 0;

function mineBobaToken() {

    bobaBalance += 1;

    localStorage.setItem(
        "bobaBalance",
        bobaBalance
    );

    document.getElementById("bobaBalance").innerText =
        "Boba Balance: " + bobaBalance + " BOBA";
}