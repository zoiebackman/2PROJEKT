
let createButton = document.querySelector(".createButton");
let createNumbersInput = document.querySelector(".createNumbers");

let numbersBox = document.querySelector(".numbersBox");

createNumbersInput.value = 95;


function createNumbersBox(value) {
    let number = parseInt(createNumbersInput.value);

    numbersBox.innerHTML = "";

    for (let i = 1; i <= number; i++) {
        let randomValue = Math.floor(Math.random() * 100);
        let cell = document.createElement("div");
        cell.classList.add("allNumbersBoxCell");
        cell.textContent = randomValue;
        numbersBox.appendChild(cell);
    }
}

createButton.addEventListener("click", function () {
    createNumbersBox(createNumbersInput.value)
})

createNumbersBox(createNumbersInput.value);






