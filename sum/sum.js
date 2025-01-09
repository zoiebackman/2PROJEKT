
function sumOfNumber(numberArray) {
    let sum = 0

    for (let i = 0; i < numberArray.length; i++) {
        sum += numberArray[i];
    }

    return sum;
}

function sumOfMarkedNumber() {

}

let sumOfAll = document.getElementById("sumNumberBox");
let sumOfMarked = document.getElementById("sumOfMarkedBox");


sumOfAll.textContent = sumOfNumber();
