const container = document.querySelector(".container");

function createGrid (num) {
    let totalNumOfCells = num ** 2;
    let cellWidth = 980 / num;
    for (let i = 0; i < totalNumOfCells; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.height = `${cellWidth}px`;
        cell.style.width = `${cellWidth}px`;
        container.appendChild(cell);

    }
}

createGrid(10);