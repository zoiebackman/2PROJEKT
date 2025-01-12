let input = document.getElementById("addUpToInput");
let twoCellsButton = document.getElementById("twoCells");
let cells = document.querySelectorAll(".allNumbersBoxCell");

input.value = 179;


twoCellsButton.addEventListener("click", function () {
    cells = document.querySelectorAll(".allNumbersBoxCell")
    let inputNumber = parseInt(input.value);

    for (let i = 0; i < cells.length; i++) {
        let firstNumber = parseInt(cells[i].textContent);
        for (let j = i + 1; j < cells.length; j++) {
            let secondNumber = parseInt(cells[j].textContent);
            if (firstNumber + secondNumber == inputNumber) {
                cells[i].classList.add("greenBox");
                cells[j].classList.add("greenBox");
                return;
            }
        }
    }
})