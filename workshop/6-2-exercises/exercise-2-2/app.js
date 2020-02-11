// Exercise 2.2 - the Custom Grid
// ------------

// Use the grid code you wrote in 2.1

// Objectives
// Allow the user to create cells on the board based on values he/she inputs.
// - Ask the user the number of ROWS and COLUMNS
// - Use those values to generate a grid

// Hints
// - use the 'blur' event
// - one event listener per input

// If you need extra hints, see somebody... :)

let board = document.querySelector("#board");

board.style.width = "600px";
board.style.height = "600px";

let rows = 10;
let columns = 10;

board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

function handleRows(e) {
    rows = e.target.value;
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

}

function handleColumns(e) {
    columns = e.target.value;
    board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

}

let cell = document.createElement("div");
board.append(cell);

cell.classList.add("cell");

board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

for (let cellNum = 0; cellNum < rows * columns; cellNum++) {
    const cell = document.createElement('div');
    cell.id = `cell-${cellNum}`;
    cell.classList.add('cell');
    board.appendChild(cell);
}

let rowInput = document.querySelector("#rows-input");
let columnInput = document.querySelector("#columns-input");




rowInput.addEventListener('blur', handleRows);
columnInput.addEventListener('blur', handleColumns);