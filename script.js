const btnAC = document.getElementById('btnAC');
const btnPercent = document.getElementById('btnPercent');
const btnDot = document.getElementById('btnDot');
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
const btnNegative = document.getElementById('btnNegative');
const outputBar = document.querySelector('.outputBar');
const outputText = document.getElementById('outputText');
const previousBar = document.querySelector('.previousBar');
const previousText = document.getElementById('previousText');5
let firstValue = '';
let secondValue = '';
let finalValue;
const char = ["+", "-", "*", "/"];

function multCompute() {
    if (previousText.textContent.includes("*")) {
        finalValue = parseFloat(firstValue) * parseFloat(secondValue);
        if (firstValue.toString().includes(".") || secondValue.toString().includes(".")) {
            return parseFloat(finalValue).toFixed(2);
        } else {
            return finalValue;
        }
    }
}

function divCompute() {
    if (previousText.textContent.includes("/")) {
        finalValue = parseFloat(firstValue) / parseFloat(secondValue);
        if (firstValue.toString().includes(".") || secondValue.toString().includes(".") || firstValue % secondValue !== 0) {
            return parseFloat(finalValue).toFixed(2);
        } else {
            return parseFloat(finalValue);
        }
    }
}

function compute() {
    if (previousText.textContent.includes("+")) {
        finalValue = parseFloat(firstValue) + parseFloat(secondValue);
        if (firstValue.toString().includes(".") || secondValue.toString().includes(".")) {
            return parseFloat(finalValue).toFixed(2);
        } else {
            return parseFloat(finalValue);
        }
    } else if (previousText.textContent.includes("-")) {
        finalValue = parseFloat(firstValue) - parseFloat(secondValue);
        if (firstValue.toString().includes(".") || secondValue.toString().includes(".")) {
            return parseFloat(finalValue).toFixed(2);
        } else {
            return parseFloat(finalValue);
        }
    } 
}


function buttonClick(num) {
    if (outputText.textContent == "0") {
        outputText.textContent = num;
        if (firstValue !== '') {
            firstValue = firstValue
        } else if (firstValue == '') {
            firstValue = num;
        }
    } else if (outputText.textContent !== "") {
        outputText.textContent += num;
        if (secondValue !== '') {
            firstValue = firstValue
        } else if (secondValue == '') {
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
        if (secondValue !== '') {
            secondValue += num;
        } else if (secondValue == '')
            secondValue = num;
    } else if (previousText.textContent.includes("-")) {
        firstValue = firstValue;
        if (secondValue !== '') {
            secondValue += num;
        } else if (secondValue == '')
            secondValue = num;
    } else if (previousText.textContent.includes("*")) {
        firstValue = firstValue;
        if (secondValue !== '') {
            secondValue += num;
        } else if (secondValue == '')
            secondValue = num;
    } else if (previousText.textContent.includes("/")) {
        firstValue = firstValue;
        if (secondValue !== '') {
            secondValue += num;
        } else if (secondValue == '')
            secondValue = num;
    }
}

function operation(op) {
    if (previousText.textContent !== '') {
        previousText.textContent += " " + op;
        outputText.textContent = 0;
    } else {
        previousText.textContent = outputText.textContent + " " + op;
        outputText.textContent = 0;
    }
}

function toNegative() {
    if (outputText.textContent == "0") {
        return false;
    } else {
        negStr = "-" + outputText.textContent;
        outputText.textContent = negStr;
    }
    let neg1 = -Math.abs(firstValue);
    let neg2 = -Math.abs(secondValue);
    if (firstValue !== -Math.abs(firstValue) && previousText.textContent.includes("+") == false && previousText.textContent.includes("-") == false && previousText.textContent.includes("*") == false && previousText.textContent.includes("/") == false) {
        firstValue = neg1;
    } else if (previousText.textContent.includes("+") || previousText.textContent.includes("-") || previousText.textContent.includes("*") || previousText.textContent.includes("/")) {
        firstValue = firstValue;
        secondValue = neg2;
    }

    if (secondValue == -Math.abs(secondValue) && previousText.textContent.includes("+") || previousText.textContent.includes("-") || previousText.textContent.includes("*") || previousText.textContent.includes("/")) {
        newArray = previousText.textContent.split(" ");
        newArray[2] = `${secondValue}`;
        previousText.textContent = newArray.join(" ");
    } 
}

function toDecimal() {
    let decimal;
    if (firstValue !== decimal && previousText.textContent.includes("+") == false && previousText.textContent.includes("-") == false && previousText.textContent.includes("*") == false && previousText.textContent.includes("/") == false) {
        firstValue += "%";
        decimal = parseFloat(firstValue) / 100;
        firstValue = decimal;
        outputText.textContent = decimal;
    } else if (secondValue && previousText.textContent.includes("+") || previousText.textContent.includes("-") || previousText.textContent.includes("*") || previousText.textContent.includes("/")) {
        firstValue = firstValue;
        secondValue += "%";
        decimal = parseFloat(secondValue) / 100;
        secondValue = decimal;
        outputText.textContent = decimal;
    }

    if (secondValue && previousText.textContent.includes("+") || previousText.textContent.includes("-") || previousText.textContent.includes("*") || previousText.textContent.includes("/")) {
        newArray = previousText.textContent.split(" ");
        newArray[2] = `${secondValue}`;
        newArray.pop();
        previousText.textContent = newArray.join(" ");
    } 
}

 


btnAC.addEventListener('click', function() {
    outputText.textContent = "0";
    previousText.textContent = "";
    firstValue = '';
    secondValue = '';
    finalValue;
});

btnPercent.addEventListener('click', function() {
    if (outputText.textContent == "0") {
        return false;
    } else if (outputText.textContent !== "0") {
        toDecimal();
    }
});

btnDot.addEventListener('click', function() {
    if (outputText.textContent.includes(".") == false) {
        outputText.textContent += ".";
    } else if (outputText.textContent.includes(".")) {
        return false;
    }
    
    if (previousText.textContent.includes("+") == false && previousText.textContent.includes("-") == false && previousText.textContent.includes("*") == false && previousText.textContent.includes("/") == false) {
        firstValue += ".";
    } 

    for (let i = 0; i < char.length; i++) {
        if (previousText.textContent.includes(char[i]) && secondValue) {
            newArray = previousText.textContent.split(" ");
            newArray[2] = `${secondValue}.`;
            previousText.textContent = newArray.join(" ");
            secondValue += ".";
            break;
        } 
    }
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
    if (outputText.textContent == "0") {
        return false;
    } else {
        operation("+");
    }
});

btnMinus.addEventListener('click', function() {
    if (outputText.textContent == "0") {
        return false;
    } else {
        operation("-");
    }
});

btnMult.addEventListener('click', function() {
    if (outputText.textContent == "0") {
        return false;
    } else {
        operation("*");
    }
});

btnDivide.addEventListener('click', function() {
    if (outputText.textContent == "0") {
        return false;
    } else {
        operation("/");
    }
});

btnNegative.addEventListener('click', function() {
    toNegative();
});

btnEquals.addEventListener('click', function() {
    if (outputText.textContent == "0" && previousText.textContent.includes("0") == false || outputText.textContent == previousText.textContent) {
        return false;
    } else if (secondValue == "0" && previousText.textContent.includes("/")) {
        outputText.textContent = "can't div by zero"
    } else if (previousText.textContent.includes("*")) {
        previousText.textContent += " ="
        outputText.textContent = `${multCompute()}`;
        previousText.textContent += " " + multCompute();
        firstValue = multCompute();
        secondValue = '';
        previousText.textContent = `${firstValue}`
    } else if (previousText.textContent.includes("/")) {
        previousText.textContent += " ="
        outputText.textContent = `${divCompute()}`;
        previousText.textContent += " " + divCompute();
        firstValue = divCompute();
        secondValue = '';
        previousText.textContent = `${firstValue}`
    } else {
        previousText.textContent += " ="
        outputText.textContent = `${compute()}`;
        previousText.textContent += " " + compute();
        firstValue = compute();
        secondValue = '';
        previousText.textContent = `${firstValue}`
    }
});



