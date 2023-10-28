const display = document.querySelector(".displayText")
const btnContainer = document.querySelector(".buttonContainer");
const btnArray = ["AC", "+/-", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 
                1, 2, 3, "+", "del", 0, ".", "=" ]
const operators = ["/", "*", "-", "+"]

let num1;
let num2;
let operator;
let isNum2 = false;

//create Buttons and their style
function createButtons(){
    for(let i=0;i<20;i++){
        const square = document.createElement("div");
        square.setAttribute("style", "display: flex;\
                            justify-content: center; align-items: center; \
                            background-color: hsl(182,59%,25%); \
                            height: 100.4px; width: 125px; \
                            font-size: 30px; color: white;");
        square.textContent = btnArray[i];
        square.addEventListener("mousedown", ()=>square.style.backgroundColor = "hsl(182,59%,30%)");
        square.addEventListener("mouseup", ()=>square.style.backgroundColor = "hsl(182,59%,25%)");
        displayText(square, i);
        
        btnContainer.appendChild(square);
    }  
}

function displayText(square, i){
    //display numbers
    if(square.textContent >= 0 && square.textContent <= 9){
        square.addEventListener("click", ()=>{
            if(operator == undefined){
                if(display.textContent == 0){
                    display.textContent = btnArray[i];
                    num1 = display.textContent;
                } else {
                    display.textContent += btnArray[i];
                    num1 = display.textContent;
                }
            } else {
                display.textContent = 0;
                if(display.textContent == 0){
                    display.textContent = btnArray[i];
                    num2 = display.textContent;
                } else {
                    display.textContent += btnArray[i];
                    num2 = display.textContent;
                }
            }
            console.log(`num1: ${num1}, num2: ${num2}, operator: ${operator}`)
        })
    }

    if(square.textContent == "+" || square.textContent == "-" ||
       square.textContent == "*" || square.textContent == "/"){
        square.addEventListener("click", ()=>{
            operator = square.textContent;
            console.log(operator)
        })
    }
    

    
}
createButtons();

function operate(num1, operator, num2){
    if(operator == "+"){
        operator = null;
        return add(num1, num2);
    } else if (operator == "-"){
        operator = null;
        return subtract(num1, num2);
    } else if (operator == "*"){
        operator = null;
        return multiply(num1, num2);
    } else {
        operator = null;
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