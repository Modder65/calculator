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
const outputBar = document.querySelector('.outputBar');
const outputText = document.getElementById('outputText');

btnAC.addEventListener('click', function() {
    outputText.textContent = "0";
});

btn0.addEventListener('click', function() {
    if (outputText.textContent == "0") {
        outputText.textContent = "0";
    } else if (outputText !== "") {
        outputText.textContent += "0";
    } else {
        outputText.textContent = "0";
    }
});

btn1.addEventListener('click', function() {
    if (outputText.textContent == "0") {
        outputText.textContent = "1";
    } else if (outputText !== "") {
        outputText.textContent += "1";
    } else {
        outputText.textContent = "1";
    }
});

btn2.addEventListener('click', function() {
    if (outputText.textContent == "0") {
        outputText.textContent = "2";
    } else if (outputText !== "") {
        outputText.textContent += "2";
    } else {
        outputText.textContent = "2";
    }
});

btn3.addEventListener('click', function() {
    if (outputText.textContent == "0") {
        outputText.textContent = "3";
    } else if (outputText !== "") {
        outputText.textContent += "3";
    } else {
        outputText.textContent = "3";
    }
});

btn4.addEventListener('click', function() {
    if (outputText.textContent == "0") {
        outputText.textContent = "4";
    } else if (outputText !== "") {
        outputText.textContent += "4";
    } else {
        outputText.textContent = "4";
    }
});

btn5.addEventListener('click', function() {
    if (outputText.textContent == "0") {
        outputText.textContent = "5";
    } else if (outputText !== "") {
        outputText.textContent += "5";
    } else {
        outputText.textContent = "5";
    }
});

btn6.addEventListener('click', function() {
    if (outputText.textContent == "0") {
        outputText.textContent = "6";
    } else if (outputText !== "") {
        outputText.textContent += "6";
    } else {
        outputText.textContent = "6";
    }
});

btn7.addEventListener('click', function() {
    if (outputText.textContent == "0") {
        outputText.textContent = "7";
    } else if (outputText !== "") {
        outputText.textContent += "7";
    } else {
        outputText.textContent = "7";
    }
});

btn8.addEventListener('click', function() {
    if (outputText.textContent == "0") {
        outputText.textContent = "8";
    } else if (outputText !== "") {
        outputText.textContent += "8";
    } else {
        outputText.textContent = "8";
    }
});

btn9.addEventListener('click', function() {
    if (outputText.textContent == "0") {
        outputText.textContent = "9";
    } else if (outputText !== "") {
        outputText.textContent += "9";
    } else {
        outputText.textContent = "9";
    }
});

/*
btnPlus.addEventListener('click', function() {
    if (outputText.textContent !== "") {
        parseInt(outputText.textContent) + 
    }
});
*/