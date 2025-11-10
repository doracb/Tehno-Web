let oddRows = document.querySelectorAll("tbody tr:nth-child(odd)");
let firstRow = document.querySelector("tbody tr:first-child");
let lastRow = document.querySelector("tbody tr:last-child");

if (oddRows && oddRows.length > 0) {
    for (let item of oddRows) {
        item.bgColor = "#FF00FF";
    }
}

if (firstRow) {
    firstRow.bgColor = "blue";
}

if (lastRow) {
    lastRow.bgColor = "green";
}