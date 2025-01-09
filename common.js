
let createButton = document.querySelector(".createButton");
let createNumbersInput = document.querySelector(".createNumbers");
let numbersBox = document.querySelector(".numbersBox");

let numbersArray = [];
console.log(numbersArray);

createNumbersInput.value = 95;


function createNumbersBox(value) {
    let number = parseInt(createNumbersInput.value);
    numbersArray = [];
    numbersBox.innerHTML = "";

    for (let i = 1; i <= number; i++) {
        let randomValue = Math.floor(Math.random() * 100);
        numbersArray.push(randomValue);
        let cell = document.createElement("div");
        cell.classList.add("allNumbersBoxCell");
        cell.textContent = randomValue;
        numbersBox.appendChild(cell);
    }
    console.log(numbersArray)
    return numbersArray
}

createButton.addEventListener("click", function () {
    createNumbersBox(createNumbersInput.value)
})


createNumbersBox(createNumbersInput.value);







