function convert() {
    let value = document.getElementById("inputValue").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;

    if (value === "") {
        document.getElementById("result").value = "";
        return;
    }

    value = parseFloat(value);
    let result = value;

    if (from === "deg" && to === "rad") {
        result = value * Math.PI / 180;
    }
    else if (from === "rad" && to === "deg") {
        result = value * 180 / Math.PI;
    }

    document.getElementById("result").value = result.toFixed(4);
}
