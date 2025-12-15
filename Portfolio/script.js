// function convert() {
//     let value = document.getElementById("value").value;
//     let type = document.getElementById("type").value;
//     let result = 0;

//     if (type === "degToRad") {
//         // องศา → เรเดียน
//         result = value * (Math.PI / 180);
//     } else {
//         // เรเดียน → องศา
//         result = value * (180 / Math.PI);
//     }

//     document.getElementById("result").innerText =
//         "ผลลัพธ์ = " + result.toFixed(4);
// }


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

    // องศา → เรเดียน
    if (from === "deg" && to === "rad") {
        result = value * Math.PI / 180;
    }
    // เรเดียน → องศา
    else if (from === "rad" && to === "deg") {
        result = value * 180 / Math.PI;
    }

    document.getElementById("result").value = result.toFixed(4);
}
