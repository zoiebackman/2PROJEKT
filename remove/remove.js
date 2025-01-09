let removeNewRandomNumber = document.getElementById("removeNewNumber");
let removeNewRandomNumberText = document.getElementById("removeNewNumberBox");
let removeNewRandomNumberBox = document.getElementById("newNumberBoxText");
let removeButton = document.getElementById("removeButton");

removeNewRandomNumber.addEventListener("click", function () {
    let cells = document.querySelectorAll(".allNumbersBoxCell");
    let randomIndex = Math.floor(Math.random() * 100);
    removeNewRandomNumberText.textContent = randomIndex;

    removeNewRandomNumberBox.textContent = "-";

    let found = false;

    for (let cell of cells) {
        if (cell.textContent === removeNewRandomNumberText.textContent) {
            cell.classList.add("orangeBox")
            found = true;
        }
    }

    if (!found) {
        removeNewRandomNumberBox.textContent = "Nothing to remove";
    }
})

removeButton.addEventListener("click", function () {
    let cells = document.querySelectorAll(".allNumbersBoxCell");
    let selectedNumber = parseInt(removeNewRandomNumberText.textContent);
    let count = 0;

    for (let cell of cells) {
        if (parseInt(cell.textContent) === selectedNumber) {
            count++;
            cell.classList.add("redBox");
            cell.textContent = "x";
            removeNewRandomNumberBox.textContent = `${selectedNumber} removed ${count} times`
        }
    }

});