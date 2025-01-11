let clearButton = document.getElementById("clearButton");

let cells = document.querySelectorAll(".allNumbersBoxCell");
for (let cell of cells) {
    cell.classList.add("blueRed")
    cell.addEventListener("click", function () {
        cell.classList.add("redOrangeBox")

    });
}

clearButton.addEventListener("click", function () {
    for (let cell of cells) {
        cell.classList.remove("redOrangeBox")
    }
})