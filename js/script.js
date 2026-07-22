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