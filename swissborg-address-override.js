// SwissBorg Polygon Address Override

(function () {

    const originalStartMining = window.startMining;

    window.startMining = function () {

        let addressInput =
            document.getElementById("polygonAddress");

        if (!addressInput) {

            addressInput = document.createElement("input");

            addressInput.id = "polygonAddress";

            addressInput.type = "text";

            addressInput.placeholder =
                "Enter SwissBorg Polygon Address";

            addressInput.style.width = "80%";
            addressInput.style.padding = "12px";
            addressInput.style.margin = "10px";
            addressInput.style.borderRadius = "10px";

            const minerBox =
                document.getElementById("minerBox") ||
                document.body;

            minerBox.insertBefore(
                addressInput,
                minerBox.firstChild
            );
        }

        const address =
            addressInput.value.trim();

        if (address === "") {

            alert(
                "SwissBorg Polygon address required before mining can start."
            );

            addressInput.focus();
            return;
        }

        if (!address.startsWith("0x")) {

            alert(
                "Please enter a valid Polygon address beginning with 0x."
            );

            addressInput.focus();
            return;
        }

        if (typeof originalStartMining === "function") {
            originalStartMining();
        }
    };

})();