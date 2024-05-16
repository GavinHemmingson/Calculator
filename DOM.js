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