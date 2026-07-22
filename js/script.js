// Sheard Functions
function getInnerText(id) {
    const input = document.getElementById(id);
    const inputValue = input.innerText;
    const innerTextValue = parseInt(inputValue);
    return innerTextValue;
}

// Heart Function
const hearts = document.getElementsByClassName('hrt-btn');

for (const heart of hearts) {
    heart.addEventListener('click', function () {

        const heartNum = getInnerText('heart-txt');

        const newHeartNum = document.getElementById('heart-txt');

        newHeartNum.innerText = heartNum + 1;
    })
}

// Call function

const calls = document.getElementsByClassName('call-btn');

const coinDisplay = getInnerText('coin-num');

const historyPart = document.getElementById('call-history');

const clearBtn = document.getElementById('clear-btn');

for (const call of calls) {
    call.addEventListener('click', function () {

        const currentCoin = coinDisplay;

        if (currentCoin < 20) {
            alert('Not enough coins!');
            return;
        }

        const serviceName = this.getAttribute('data-name');
        const serviceNum = this.getAttribute('data-num');

        coinDisplay.innerText = currentCoin - 20;

        alert('Calling ' + serviceName + ': ' + serviceNum);

    })
}