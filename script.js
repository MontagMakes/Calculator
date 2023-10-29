const display = document.querySelector(".displayText")
const btnContainer = document.querySelector(".buttonContainer");
const btnArray = ["AC", "+/-", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 
                1, 2, 3, "+", "del", 0, ".", "=" ]
const operators = ["/", "*", "-", "+"]

let num1 = null;
let num2 = null;
let operator = null;
let isNumFirst = true;

createButtons();
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
            if(num1 == null && num2 == null && operator == null){
                console.log(isNumFirst)
                if(isNumFirst){
                    display.textContent = btnArray[i];
                    num1 = display.textContent;
                    isNumFirst = false;
                } else if (!isNumFirst) {
                    display.textContent += btnArray[i];
                    num1 = display.textContent;
                }
                console.log(`num1: ${num1} num2: ${num2} operator: ${operator} isNumFirst: ${isNumFirst}`)

            } else if(num1 != null && operator != null) {
                if(isNumFirst){
                    display.textContent = btnArray[i];
                    num2 = display.textContent;
                    isNumFirst = false;
                } else if (!isNumFirst){
                    display.textContent += btnArray[i];
                    num2 = display.textContent;
                }
                console.log(`num1: ${num1} num2: ${num2} operator: ${operator} isNumFirst: ${isNumFirst}`)
            } else {
                if(isNumFirst){
                    display.textContent = btnArray[i];
                    num1 = display.textContent;
                    isNumFirst = false;
                } else {
                    display.textContent += btnArray[i];
                    num1 = display.textContent;
                }
                console.log(`num1: ${num1} num2: ${num2} operator: ${operator} isNumFirst: ${isNumFirst}`)
            } 
        })
    }

    //Operators
    if(square.textContent == "+" || square.textContent == "-" ||
       square.textContent == "*" || square.textContent == "/"){
        square.addEventListener("click", ()=>{
            if(num1 != null && num2 == null && operator == null){
                
                display.textContent = 0;
                operator = square.textContent;
                isNumFirst = true;

            } else if (num1 != null && num2 != null && operator != null){
                display.textContent = operate(num1, operator, num2);
                
                num1 = display.textContent;
                num2 = null;
                operator = square.textContent;
                isNumFirst = true;
                
            } else if (num1 != null && num2 == null && operator != null){
                operator = square.textContent;
            }

        })
    }

    if(square.textContent == "="){
        square.addEventListener("click", ()=>{
            display.textContent = operate(num1, operator, num2);
            console.log(`num1: ${num1}, num2: ${num2}, operator: ${operator} isNumFirst: ${isNumFirst}`)
            
            num1 = display.textContent;
            num2 = null;
            operator = null;
            isNumFirst = true;
            
        })
    }

    //clear
    if(square.textContent == "AC"){
        square.addEventListener("click", ()=>{
            display.textContent = 0;
            num1 = null;
            num2 = null;
            operator = null;
            isNumFirst = true;
        })
    }
    if(square.textContent == "del"){
        square.addEventListener("click", ()=>{
            let charDel = display.textContent.charAt(display.textContent.length-1);
            display.textContent.replace(charDel, "1")
            console.log(display.textContent.charAt(display.textContent.length-1))
            
        })
    }

}

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
    return Number(num1) + Number(num2);
}

function multiply(num1, num2){
    return Number(num1) * Number(num2);
}

function subtract(num1, num2){
    return Number(num1) - Number(num2)
}

function divide(num1, num2){
    return Number(num1) / Number(num2);
}