let equals = false;
const display = document.querySelector(".display")
display.textContent = display1

const deciButton = document.querySelector(".deci")
deciButton.addEventListener("click", deciCheck)

function deciCheck()
{   
    if(num2.toString().includes("."))
        {
            console.log("party")
            return
        }
    if(num2.length > 12)
        {return}

    if(num2 == 0)
        {
            num2 = num2 +deciButton.id
        }
    else if(num2 != 0)
        {
        num2 = num2 + deciButton.id
        }

    display.textContent = num2

}

const numButton = document.querySelectorAll(".number")
numButton.forEach(
    (num)=> num.addEventListener("click", () => initialValue(num))
)
function initialValue(x)
{
    if(num2.length > 12)
        {return}
    if(equals == true)
        {
            num2 = "0"
            equals = false;
        }
    if(num2 == 0)
        {
            num2 = x.id
        }
    else if(num2 != 0)
        {
        num2 = num2 + x.id
        }

    display.textContent = num2
}
const clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", () => ( num2 = "", num1 = "",operand = "", display.textContent = display1))

const operandButton = document.querySelectorAll(".operand")
operandButton.forEach((ops) => ops.addEventListener("click", ()=> (
    console.log("taco"),
    equals = false,
    opsFunc(),    
    operand = ops.id,
    num1 = num2,
    num2 = ""
)))

function opsFunc()
{
    if(operand)
    {
        operate()
    }
    else
    {
        return
    }
}

const enterButton = document.querySelector(".enter")
enterButton.addEventListener("click", ()=> (operate(), operand = "", equals = true))

const reverseSign = document.querySelector(".negative")
reverseSign.addEventListener("click", ()=> (num2 = parseFloat(num2) * -1, display.textContent = num2))

document.addEventListener('keydown', function (event)
{
    if(event.code == "Backspace")
        {
            if(equals == true)
                {
                    num2 = "0"
                    equals = false;
                }
            num2 = num2.toString();
            num2 = num2.split("");
            num2.pop();
            if(num2.length == 0)
                {
                    num2 = 0
                }
            if(num2.length > 1)
                {
                    num2 = num2.join("")
                }
            num2 = parseFloat(num2)
            display.textContent = num2;
        }
    if(num2.length > 12)
        {return}
    if(event.which == 13)
        {
            event.preventDefault();
            operate(), 
            operand = "", 
            equals = true
        }

    switch(event.code)
        {
            case "Digit0","Numpad0":
                if(equals == true)
                    {num2 = ""}
                equals = false
                if(num2 == 0)
                    {
                        break;
                    }
                num2 = num2 + "0"
                display.textContent = num2;
                
                break
            case "Digit1","Numpad1":
                if(equals == true)
                    {num2 = ""}
                equals = false
                if(num2 == 0)
                    {
                        num2 = "1";
                        display.textContent = num2;
                        break;
                    }
                num2 = num2 + "1"
                display.textContent = num2;
                
                break
            case "Digit2","Numpad2":
                if(equals == true)
                    {num2 = ""}
                equals = false
                if(num2 == 0)
                    {
                        num2 = "2";
                        display.textContent = num2;
                        break;
                    }
                num2 = num2 + "2"
                display.textContent = num2;
                
                break
            case "Digit3","Numpad3":
                if(equals == true)
                    {num2 = ""}
                equals = false
                if(num2 == 0)
                    {
                        num2 = "3";
                        display.textContent = num2;
                        break;
                    }
                num2 = num2 + "3"
                display.textContent = num2;

                break
            case "Digit4","Numpad4":
                if(equals == true)
                    {num2 = ""}
                equals = false
                if(num2 == 0)
                    {
                        num2 = "4";
                        display.textContent = num2;
                        break;
                    }
                num2 = num2 + "4"
                display.textContent = num2;

                break
            case "Digit5","Numpad5":
                if(equals == true)
                    {num2 = ""}
                equals = false
                if(num2 == 0)
                    {
                        num2 = "5";
                        display.textContent = num2;
                        break;
                    }
                num2 = num2 + "5"
                display.textContent = num2;
                break
            case "Digit6","Numpad6":
                if(equals == true)
                    {num2 = ""}
                equals = false
                if(num2 == 0)
                    {
                        num2 = "6";
                        display.textContent = num2;
                        break;
                    }
                num2 = num2 + "6"
                display.textContent = num2;
                
                break
            case "Digit7","Numpad7":
                if(equals == true)
                    {num2 = ""}
                equals = false
                if(num2 == 0)
                    {
                        num2 = "7";
                        display.textContent = num2;
                        break;
                    }
                num2 = num2 + "7"
                display.textContent = num2;
                
                break
            case "Digit8","Numpad8":
                if(equals == true)
                    {num2 = ""}
                equals = false
                if(num2 == 0)
                    {
                        num2 = "8";
                        display.textContent = num2;
                        break;
                    }
                num2 = num2 + "8"
                display.textContent = num2;
                break
            case "Digit9","Numpad9":
                if(equals == true)
                    {num2 = ""}
                equals = false
                if(num2 == 0)
                    {
                        num2 = "9";
                        display.textContent = num2;
                        break;
                    }
                num2 = num2 + "9"
                display.textContent = num2;
                
                break
            case "NumpadAdd":
                equals = false,
                opsFunc(),    
                operand = "+",
                num1 = num2,
                num2 = ""
                break
            case "Minus","NumpadSubtract":
                equals = false,
                opsFunc(),    
                operand = "-",
                num1 = num2,
                num2 = ""
                break
            case "NumpadDivide":
                equals = false,
                opsFunc(),    
                operand = "/",
                num1 = num2,
                num2 = ""
                break
            case "NumpadMultiply":
                equals = false,
                opsFunc(),    
                operand = "*",
                num1 = num2,
                num2 = ""
                break
            case "NumpadDecimal":
                deciCheck()
                break

        }

})