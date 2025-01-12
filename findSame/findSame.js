let cells = document.querySelectorAll(".allNumbersBoxCell");
let findSameText = document.getElementById("findSameText");
let resetButton = document.getElementById("resetButton");

for (let cell of cells) {
    cell.addEventListener("click", function () {
        cells = document.querySelectorAll(".allNumbersBoxCell")
        let counter = 0;

        for (let secondCell of cells) {
            if (cell.textContent === secondCell.textContent) {
                secondCell.classList.add("greenBox");
                counter += 1;
            } else {
                secondCell.classList.remove("greenBox")
                findSameText.textContent = "";
            }

            findSameText.textContent = `${counter} copies of the number ${cell.textContent}`;
        }
    })

    resetButton.addEventListener("click", function () {
        cells = document.querySelectorAll(".allNumbersBoxCell")
        findSameText.textContent = "Click on a number to find copies"

        for (let cell of cells) {
            cell.classList.remove("greenBox");
        }
    })
}

createButton.addEventListener("click", function () {
    createNumbersBox(createNumbersInput.value)
    cells = document.querySelectorAll(".allNumbersBoxCell");
    for (let cell of cells) {
        cell.addEventListener("click", function () {
            cells = document.querySelectorAll(".allNumbersBoxCell")
            let counter = 0;

            for (let secondCell of cells) {
                if (cell.textContent === secondCell.textContent) {
                    secondCell.classList.add("greenBox");
                    counter += 1;
                } else {
                    secondCell.classList.remove("greenBox")
                    findSameText.textContent = "";
                }

                findSameText.textContent = `${counter} copies of the number ${cell.textContent}`;
            }
        })

        resetButton.addEventListener("click", function () {
            cells = document.querySelectorAll(".allNumbersBoxCell")
            findSameText.textContent = "Click on a number to find copies"

            for (let cell of cells) {
                cell.classList.remove("greenBox");
            }
        })
    }
})




