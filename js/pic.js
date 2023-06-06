function getMainpin()
{
    
    const pin = getpin();
    const pinString = pin + '';
    if(pinString.length===4)
    {
        console.log(pin);
        return pin;
    }
    else
    {

        getMainpin();
    }
}
function getpin()
{
    const random = Math.round(Math.random()*10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click', function()
{
    const mainPin = getMainpin();
    const pinDisplay = document.getElementById('pin-display');
    pinDisplay.value = mainPin;
    
})
document.getElementById('calculator').addEventListener('click', function(event)
{
    const number = event.target.innerText;
    // console.log(number);
    const typeNumberField = document.getElementById('type-number');
    const prevTypeNumber = typeNumberField.value;
    if(isNaN(number))
    {
        if(number === 'C')
        {
            typeNumberField.value = '';
        }
        else if(number === '<')
        {
            const digit = prevTypeNumber.split('');
            digit.pop();
            const mainDigit = digit.join('');
            typeNumberField.value = mainDigit;
        }

    }
    else{
        const newTypeNumber = prevTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})

document.getElementById('sub-btn').addEventListener('click', function(){
    const displayPinField = document.getElementById('pin-display');
    const displayPin = displayPinField.value;
    const typeNumberField = document.getElementById('type-number');
    const typeNumber = typeNumberField.value;
    const verifyFail = document.getElementById('verify-fail');
    const verifySuccess = document.getElementById('verify-success');
    if(displayPin === typeNumber)
    {
        verifySuccess.style.display = 'block';
        verifyFail.style.display = 'none';
    }
    else{
        verifySuccess.style.display = 'none';
        verifyFail.style.display = 'block';
    }
})