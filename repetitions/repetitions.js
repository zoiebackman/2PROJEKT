function mostNumbersinArray(array) {
    let counter = 0;
    let numberNumber = [];
    let howManyNumbers = {};

    for (let i = 0; i <= 100; i++) {
        numbers.push(i);
    }

    for (let j = 0; j < array.length; j++) {
        if (array[j]) {
            counter++
        }
        if (counter > 0) {
            numberNumber.push(array[j]);
        }
    }

    return numberNumber;
}

function notNumberInArray(array) {
    let numbers = [];
    let missingNumbers = [];

    for (let i = 0; i <= 100; i++) {
        numbers.push(i);
    }

    for (let k = 0; k < numbers.length; k++) {
        let found = false;
        for (let j = 0; j < array.length; j++) {
            if (array[j] == numbers[k]) {
                found = true;
                break;
            }
        }
        if (!found) {
            missingNumbers.push(numbers[k]);
        }
    }
    return missingNumbers;
};

let mostNumbers = document.getElementById("repetitionsNumberBox");
let noNumbers = document.getElementById("repetitionsNoNumberBox");
let cells = document.querySelectorAll(".allNumbersBoxCell");

mostNumbers.textContent = mostNumbersinArray(numbersArray);
noNumbers.textContent = notNumberInArray(numbersArray)



