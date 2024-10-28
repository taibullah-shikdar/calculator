let display = document.getElementById("display");

function appendNumber(number) {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    if (!/[+\-*/]$/.test(display.innerText)) {
        display.innerText += operator;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace(/×/g, "*").replace(/÷/g, "/"));
    } catch (error) {
        display.innerText = "Error";
    }
}
