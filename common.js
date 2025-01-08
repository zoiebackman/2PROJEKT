
let createButton = document.querySelector(".createButton");
let createNumbersInput = document.querySelector(".createNumbers");
let numbersBox = document.querySelector(".numbersBox");

let removeNewRandomNumber = document.getElementById("removeNewNumber");


createButton.addEventListener("click", function () {
    let number = parseInt(createNumbersInput.value);

    numbersBox.innerHTML = "";

    for (let i = 1; i <= number; i++) {
        let cell = document.createElement("div");
        cell.classList.add("allNumbersBoxCell");
        cell.textContent = Math.floor(Math.random() * 100);
        numbersBox.appendChild(cell);
    }
});





/* let allCreateNumbers = document.getElementsByClassName("createNumbers");
let allCreateButton = document.getElementsByClassName("createButton")
let allNumbersBox = document.querySelector(".numbersBox");

for (let button of allCreateButton) {
    button.addEventListener("click", function (eventObjekt) {
        let number = eventObjekt.target.value;

        allNumbersBox.innerHTML = "";

        for (let i = 1; i <= number; i++) {
            let cell = document.createElement("div");
            cell.classList.add("allNumbersBoxCell");
            cell.textContent = Math.floor(Math.random() * 100);

            allNumbersBox.appendChild(cell);
        }
    })
}
 */