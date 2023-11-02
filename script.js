const display = document.querySelector(".displayText")
const btnContainer = document.querySelector(".buttonContainer");

const arrayBtn = ["AC", "del", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 
                1, 2, 3, "+", "+/-", 0, ".", "=" ]

let num1 = null;
let num2 = null;
let operator = null;
let isNumFirst = true;

createButtons();

//create Buttons
function createButtons(){
    for(let i=0;i<20;i++){
        const btn = document.createElement("div");
        btn.className = `btn ${arrayBtn[i]}`;
        btn.textContent = arrayBtn[i];
        
        btnStyle(btn);
        btnHover(btn);
        displayScreen(btn, i);
        
        btnContainer.appendChild(btn);
    }  
}

//Btn Style
function btnStyle(btn){
    btn.setAttribute("style", "display: flex;\
        justify-content: center; align-items: center; \
        background-color: #494f52; \
        height: 95px; width: 95px; \
        font-size: 30px; color: white;\
        border-radius: 150px; box-shadow: 5px 5px 8px black");
}

//Btn Hover Effect
function btnHover(btn){
    btn.addEventListener("mouseenter", ()=>btn.style.backgroundColor = "hsl(200,6%,23%)");
    btn.addEventListener("mouseleave", ()=>btn.style.backgroundColor = "#494f52");    
}

//Btn Behaviours
function displayScreen(btn, i){

    displayNumbers(btn,i);
    displayClear(btn);
    displayDelete(btn);
    displayPercentage(btn);
    displayOperators(btn);
    displayEquals(btn);
    displayDecimal(btn);
    displayZero(btn);
    displaySign(btn);
}

//Number button behaviours
function displayNumbers(btn, i){
    
    if(btn.textContent >= 0 && btn.textContent <= 9){
        btn.addEventListener("click", ()=>{
            if(num1 == null && num2 == null && operator == null){
                console.log(isNumFirst)
                if(isNumFirst){
                    display.textContent = Number(arrayBtn[i]);
                    num1 = display.textContent;
                    isNumFirst = false;
                } else if (!isNumFirst) {
                    display.textContent += arrayBtn[i];
                    num1 = display.textContent;
                }
                console.log(`num1: ${num1} num2: ${num2} operator: ${operator} isNumFirst: ${isNumFirst}`)

            } else if(num1 != null && operator != null) {
                if(isNumFirst){
                    display.textContent = arrayBtn[i];
                    num2 = display.textContent;
                    isNumFirst = false;
                } else if (!isNumFirst){
                    display.textContent += arrayBtn[i];
                    num2 = display.textContent;
                }
                console.log(`num1: ${num1} num2: ${num2} operator: ${operator} isNumFirst: ${isNumFirst}`)
            } else {
                if(isNumFirst){
                    display.textContent = arrayBtn[i];
                    num1 = display.textContent;
                    isNumFirst = false;
                } else {
                    display.textContent += arrayBtn[i];
                    num1 = display.textContent;
                }
                console.log(`num1: ${num1} num2: ${num2} operator: ${operator} isNumFirst: ${isNumFirst}`)
            }
            
            if(display.textContent == 0){
                display.textContent = 0;
                isNumFirst = true;
            }
        })
    }
}

// Clear button behaviour
function displayClear(btn){

    if(btn.textContent == "AC"){
        btn.addEventListener("click", ()=>{
            display.textContent = 0;
            num1 = null;
            num2 = null;
            operator = null;
            isNumFirst = true;
        })
    }
}

// Delete button behaviour
function displayDelete(btn){
    
    if(btn.textContent == "del"){
        btn.addEventListener("click", ()=>{
            console.log(display.textContent.length);

            if(num1 != null){
                if(display.textContent.length > 1){
                    display.textContent = display.textContent.substring(0, display.textContent.length-1)
                    num1 = display.textContent;
                } else {
                    display.textContent = 0;
                    num1 = 0;
                    isNumFirst = true;
                }
                console.log(`num1: ${num1}, num2: ${num2}, operator: ${operator} isNumFirst: ${isNumFirst}`)

            }
        })
    }
}

// Percentage button behaviour
function displayPercentage(btn){
    
    if(btn.textContent == "%"){
        btn.addEventListener("click", ()=>{
            display.textContent = display.textContent / 100;
            if(num1 != null){
                num1 = display.textContent;
            } else if (num2 != null){
                num2 = display.textContent;
            }
            console.log(`num1: ${num1}, num2: ${num2}, operator: ${operator} isNumFirst: ${isNumFirst}`)

        })
    }
}

//Operator button behaviour
function displayOperators(btn){

    if(btn.textContent == "+" || btn.textContent == "-" ||
       btn.textContent == "*" || btn.textContent == "/"){
        btn.addEventListener("click", ()=>{
            if(num1 != null && num2 == null && operator == null){
                
                display.textContent = 0;
                operator = btn.textContent;
                isNumFirst = true;

            } else if (num1 != null && num2 != null && operator != null){
                display.textContent = operate(num1, operator, num2);
                
                num1 = display.textContent;
                num2 = null;
                operator = btn.textContent;
                isNumFirst = true;
                
            } else if (num1 != null && num2 == null && operator != null){
                operator = btn.textContent;
            }
            console.log(`num1: ${num1}, num2: ${num2}, operator: ${operator} isNumFirst: ${isNumFirst}`)

        })
    }
}

// Equal button Behaviour
function displayEquals(btn){
    
    if(btn.textContent == "="){
        btn.addEventListener("click", ()=>{
            let result = operate(num1, operator, num2);
            
            console.log(String(result).includes("-"))
            display.textContent = result;
            
            
            num1 = display.textContent
            num2 = null;
            operator = null;
            isNumFirst = true;
            console.log(`num1: ${num1}, num2: ${num2}, operator: ${operator} isNumFirst: ${isNumFirst}`)
        })
    }
}

// Decimal button behaviour
function displayDecimal(btn){
    
    if(btn.textContent == "."){
        btn.addEventListener("click", ()=>{
            display.textContent = display.textContent + ".";
        })
    }
}

// Decimal button behaviour
function displayZero(btn){
    
    if(btn.textContent == 0){
        btn.addEventListener("click", ()=>{
            if(display.textContent == 0){
                display.textContent = 0;
                isNumFirst = true;
            }
        })
    }
}

// Sign button behaviour
function displaySign(btn){
    
    if(btn.textContent == "+/-"){
        btn.addEventListener("click", ()=>{
            display.textContent = -display.textContent;
            if(num1 != null && num2 == null){
                num1 = display.textContent;
            } else if (num1 != null && num2 != null){
                num2 = display.textContent;
            }
            console.log(`num1: ${num1}, num2: ${num2}, operator: ${operator} isNumFirst: ${isNumFirst}`)
        })
    }
}

// Operator logic
function operate(num1, operator, num2){
    if(operator == "+"){
        return add(num1, num2)

    } else if (operator == "-"){
        
        return subtract(num1, num2);
    } else if (operator == "*"){
        
        return multiply(num1, num2);
    } else {
        
        return divide(num1, num2);
    }
}

// Addition logic
function add(num1, num2){
    return Number(num1) + Number(num2);
}

// Multiplication logic
function multiply(num1, num2){
    return Number(num1) * Number(num2);
}

// Subtraction logic
function subtract(num1, num2){
    return Number(num1) - Number(num2)
}

// Division logic
function divide(num1, num2){
    return Number(num1) / Number(num2);
}