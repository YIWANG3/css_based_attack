function tableCreate(row_num=30, col_num=30) {
    const body = document.getElementsByTagName("body")[0];
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    let count = 0;
    for (let j = 0; j < row_num; j++) {
        const row = document.createElement("tr");
        for (let i = 0; i < col_num; i++) {
            const cell = document.createElement("td");
            cell.id = `t-${count}`;
            count++;
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "1");
}
