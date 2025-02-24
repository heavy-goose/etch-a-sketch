let gridSize = 30;
let rainbowMode = false;
let eraserMode = false;

const container = document.querySelector(".grid-container");
const clearButton = document.querySelector("#clear-btn");
const sizeButton = document.querySelector("#size-select-btn");
const rainbowButton = document.querySelector("#rainbow-mode");
const eraserButton = document.querySelector("#eraser-mode");



function createGrid (num) {
    let totalNumOfCells = num ** 2;
    let cellWidth = 840 / num;
    for (let i = 0; i < totalNumOfCells; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.height = `${cellWidth}px`;
        cell.style.width = `${cellWidth}px`;
        container.appendChild(cell);       
    }
    const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.addEventListener("mouseover", () => {
                if (eraserMode) {
                    cell.style.backgroundColor = "white";
                } else if(rainbowMode) {
                    cell.style.backgroundColor = generateRandomColor();
                } else {
                cell.style.backgroundColor = "black";
                }
            });
        })
}

clearButton.addEventListener("click", (e) => {
    clearGrid();
    createGrid(gridSize);
});

sizeButton.addEventListener("click", (e) => {
    clearGrid();
    let userGridSize;
    let keepgoing = true;
    while (keepgoing) {
        userGridSize = parseInt(prompt("Select gridsize (4 <= number <= 100): "));
        if (userGridSize >= 4 && userGridSize <= 100) keepgoing = false;
    }
    gridSize = userGridSize;
    createGrid(gridSize);

});

rainbowButton.addEventListener("click", (e) => {
    rainbowButton.classList.toggle("active");
    if (rainbowButton.classList.contains("active")) {
        rainbowMode = true;
    } else {
        rainbowMode = false;
    }
});

eraserButton.addEventListener("click", (e) => {
    eraserButton.classList.toggle("active");
    if (eraserButton.classList.contains("active")) {
        eraserMode = true;
    } else {
        eraserMode = false;
    }
});

function clearGrid () {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => cell.remove());
}

function generateRandomColor() {
    let randomNumber = () => Math.floor(Math.random() * 255);
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

createGrid(gridSize);
