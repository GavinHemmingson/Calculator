let num1 = "0";
let num2 = "0";
let num3 = "";
let operand = "";
let display1 = "0";

function operate()
{
    if (!num2)
        {
            num2 = 0

        }
    if (!num1)
        {
            num1 = 0

        }
    if(!operand)
        {
            return
        }
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    switch(operand.charCodeAt())
    {
        case 47:
            if(num2 == 0)
                {
                    display.textContent = "What is this?"
                    num2 = ""
                    num1 = "0"
                    operand = ""
                    break
                }
            num3 = Math.round((num1/num2) * 10000000000)/10000000000;
            num2 = num3
            num1 = num2
            display.textContent = num1
            // console.log("division")
            break;
        
        case 42:
            num3 = Math.round((num1*num2) * 10000000000)/10000000000;
            num2 = num3
            num1 = num2
            display.textContent = num1
            // console.log("multiplication")
            break;
        case 43:
            num3 = num1+num2;
            num2 = num3
            num1 = num2
            display.textContent = num1
            // console.log("addition")
            break;
        case 45:
            num3 = Math.round((num1-num2) * 10000000000)/10000000000;
            num2 = num3
            num1 = num2
            
            display.textContent = num1
            // console.log("subtraction")
            break;
        default:
            num3 = "";
            // console.log("default")

        
    }
}
