inputLST1 = []
inputLST2 = []
operatorInput = ''
function evaluation(leftOperand, rightOperand, operator) {
    if(operator == '+') {
        return leftOperand + rightOperand;
    } else if(operator == '-') {
        return leftOperand - rightOperand;
    }
    else if(operator == 'x') {
        return leftOperand * rightOperand;
    }
    else if(operator == '/') {
        if (rightOperand == 0) {
            return 'Math error';
        }
        return leftOperand / rightOperand;
    }
}

function operate() {
    let num1 = parseFloat(inputLST1.join(""))
    let num2 = parseFloat(inputLST2.join(""))

    if (isNaN(num1) || isNaN(num2)) return;
    let result = evaluation(num1, num2, operatorInput);
    if(result === "Math error") {
        updateDisplay();
        return;
    }
    
    result = Math.round(result * 100) / 100;

    inputLST1 = [result.toString()];
    inputLST2 = [];
    operatorInput = "";
}

function updateDisplay() {
    userScreen.textContent = inputLST1.join("") + " " + operatorInput + " " + inputLST2.join("")
}

const userScreen = document.querySelector(".screen");
const button = document.querySelector(".buttonContainer");

button.addEventListener("click", btn => {
    btn = btn.target;
    if(btn.id === "clearButton") {
        inputLST1 = [];
        inputLST2 = [];
        operatorInput = "";
    }
    else if(btn.id === "delButton") {
        if(operatorInput === "") {
            inputLST1.pop();
        }
        else {
            inputLST2.pop();
        }
    }
    else if(['+', '-', 'x', '/'].includes(btn.textContent)) {
        console.log(btn.textContent);
        if(inputLST1.length === 0) {

        }
        else if (inputLST2.length === 0){
            operatorInput = btn.textContent;
        }
        else {
            operate();
        }
    }
    else if(btn.id === 'operateButton') {
        if(inputLST1.length !== 0 && inputLST2.length !== 0) {
            operate();
        }
    }
    else if(btn.id === "numButton" || btn.id === "dotButton"){
        if(operatorInput === "") {
            inputLST1.push(btn.textContent);
        }
        else{
            inputLST2.push(btn.textContent)
        }
    }
    updateDisplay()
})