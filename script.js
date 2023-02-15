//create a function for each math operation and assign it to the appropriate button
//perform the correct math operation when a button is clicked
//Display the mathematical expression in the output bar of the calculator on screen
const btnAC = document.getElementById('btnAC');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btnPlus = document.getElementById('btnPlus');
const btnMinus = document.getElementById('btnMinus');
const btnMult = document.getElementById('btnMult');
const btnDivide = document.getElementById('btnDivide');
const btnEquals = document.getElementById('btnEquals');
const outputBar = document.querySelector('.outputBar');
const outputText = document.getElementById('outputText');
const previousBar = document.querySelector('.previousBar');
const previousText = document.getElementById('previousText');5
let firstValue = "";
let secondValue = "";

//be able to evaluate expressions with more than 2 operands

function compute() {
    let finalValue;
    if (previousText.textContent.includes("+")) {
        finalValue = parseInt(firstValue) + parseInt(secondValue);
        return finalValue;
    } else if (previousText.textContent.includes("-")) {
        finalValue = parseInt(firstValue) - parseInt(secondValue);
        return finalValue;
    } else if (previousText.textContent.includes("*")) {
        finalValue = parseInt(firstValue) * parseInt(secondValue);
        return finalValue;
    } else if (previousText.textContent.includes("/")) {
        finalValue = parseInt(firstValue) / parseInt(secondValue);
        return finalValue;
    }
}

function buttonClick(num) {
    if (outputText.textContent == "0") {
        outputText.textContent = num;
        if (firstValue !== "") {
            firstValue = firstValue
        } else if (firstValue == "") {
            firstValue = num;
        }
    } else if (outputText !== "") {
        outputText.textContent += num;
        if (secondValue !== "") {
            firstValue = firstValue
        } else if (secondValue == "") {
            firstValue += num;
        }
    } else {
        outputText.textContent = num;
    }
    if (previousText.textContent !== "") {
        previousText.textContent += " " + num;
    }
    if (previousText.textContent.includes("+")) {
        firstValue = firstValue;
        if (secondValue !== "") {
            secondValue += num;
        } else if (secondValue == "")
            secondValue = num;
    } else if (previousText.textContent.includes("-")) {
        firstValue = firstValue;
        if (secondValue !== "") {
            secondValue += num;
        } else if (secondValue == "")
            secondValue = num;
    } else if (previousText.textContent.includes("*")) {
        firstValue = firstValue;
        if (secondValue !== "") {
            secondValue += num;
        } else if (secondValue == "")
            secondValue = num;
    } else if (previousText.textContent.includes("/")) {
        firstValue = firstValue;
        if (secondValue !== "") {
            secondValue += num;
        } else if (secondValue == "")
            secondValue = num;
    }
}

function operation(op) {
    previousText.textContent = outputText.textContent + " " + op;
    outputText.textContent = 0;
}


btnAC.addEventListener('click', function() {
    outputText.textContent = "0";
    previousText.textContent = "";
    firstValue = "";
    secondValue = "";
});

btn0.addEventListener('click', function() {
    buttonClick("0");
});

btn1.addEventListener('click', function() {
    buttonClick("1");
});

btn2.addEventListener('click', function() {
    buttonClick("2");
});

btn3.addEventListener('click', function() {
    buttonClick("3");
});

btn4.addEventListener('click', function() {
    buttonClick("4");
});

btn5.addEventListener('click', function() {
    buttonClick("5");
});

btn6.addEventListener('click', function() {
    buttonClick("6");
});

btn7.addEventListener('click', function() {
    buttonClick("7");
});

btn8.addEventListener('click', function() {
    buttonClick("8");
});

btn9.addEventListener('click', function() {
    buttonClick("9");
});

btnPlus.addEventListener('click', function() {
    operation("+");
});

btnMinus.addEventListener('click', function() {
    operation("-");
});

btnMult.addEventListener('click', function() {
    operation("*");
});

btnDivide.addEventListener('click', function() {
    operation("/");
});

btnEquals.addEventListener('click', function() {
    previousText.textContent += " ="
    outputText.textContent = `${compute()}`;
    previousText.textContent += " " + compute();
    firstValue = compute();
    secondValue = "";
});