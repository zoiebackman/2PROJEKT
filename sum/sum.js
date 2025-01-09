
function sumOfNumber(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

function sumOfMarkedNumber() {
    let sum = 0;
    let markedCells = document.querySelectorAll(".allNumbersBoxCell.greenBox")

    for (let cell of markedCells) {
        sum += parseInt(cell.textContent);
    }

    return sum;
}

let sumOfAll = document.getElementById("sumNumberBox");
let sumOfMarked = document.getElementById("sumOfMarkedBox");
let resetButton = document.getElementById("sumResetButton")

sumOfAll.textContent = sumOfNumber(numbersArray);

let cells = document.querySelectorAll(".allNumbersBoxCell");
for (let cell of cells) {
    cell.addEventListener("click", function () {
        cell.classList.add("greenBox");
        sumOfMarked.textContent = sumOfMarkedNumber();
    });
}

createButton.addEventListener("click", function () {
    sumOfAll.textContent = sumOfNumber(numbersArray);

    let cells = document.querySelectorAll(".allNumbersBoxCell");
    for (let cell of cells) {
        cell.addEventListener("click", function () {
            cell.classList.add("greenBox");
            sumOfMarked.textContent = sumOfMarkedNumber();
        });
    }
})

resetButton.addEventListener("click", function () {
    let cells = document.querySelectorAll(".allNumbersBoxCell");
    for (let cell of cells) {
        cell.classList.remove("greenBox");
        sumOfMarked.textContent = "-"
    }
})


