
const btnContainer = document.querySelector(".buttonContainer");
const btnArray = ["AC", "+/-", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 
                1, 2, 3, "+", "del", 0, ".", "=" ]

function createButtons(){
    for(let i=0;i<20;i++){
        const square = document.createElement("div");
        square.setAttribute("style", "display: flex;\
                            justify-content: center; align-items: center; \
                            background-color: #1a6365; \
                            height: 100.4px; width: 125px; \
                            font-size: 30px; color: white;");
        square.textContent = btnArray[i];
        square.addEventListener("mousedown", ()=>square.style.backgroundColor = "#2a8f91")
        square.addEventListener("mouseup", ()=>square.style.backgroundColor = "#1a6365")
        console.log(square)
        btnContainer.appendChild(square);
    }  
}

createButtons();

let num1;
let num2;
let operator;

function operate(num1, operator, num2){
    if(operator == "+"){
        return add(num1, num2);
    } else if (operator == "-"){
        return subtract(num1, num2);
    } else if (operator == "*"){
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}


function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function subtract(num1, num2){
    return num1 - num2
}

function divide(num1, num2){
    return num1 / num2;
}