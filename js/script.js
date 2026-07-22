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

const coinDisplay = document.getElementById('coin-num');

const historyPart = document.getElementById('call-history');

const clearBtn = document.getElementById('clear-btn');

for (const call of calls) {
    call.addEventListener('click', function () {

        const currentCoin = parseInt(coinDisplay.innerText);

        if (currentCoin < 20) {
            alert('Not enough coins!');
            return;
        }

        const serviceName = this.getAttribute('data-name');
        const serviceNum = this.getAttribute('data-num');

        alert('Calling ' + serviceName + ': ' + serviceNum);
        coinDisplay.innerText = currentCoin - 20;

        const time = new Date();
        const realTime = time.toLocaleTimeString();

        // History Function

        const historyContainer = document.getElementById('call-history');

        const div = document.createElement('div');

        div.innerHTML = `
        <div class="flex justify-between items-center bg-[#fafafa] p-5 rounded-2xl mt-5">
                    <div>
                        <h1 >${serviceName}</h1>
                        <p class="text-[#5c5c5c]">${serviceNum}</p>
                    </div>
                    <div>
                        <p>${realTime}</p>
                    </div>
                </div>
        `;
        historyContainer.appendChild(div);

        // Clear Button Function
        clearBtn.addEventListener('click', function () {
            div.innerHTML = '';
        });
    })
}

// Copy function

const copyButton = document.getElementsByClassName('copy-btn');

const copyCountDisplay = document.getElementById('copy-count');

for (const btn of copyButton) {
    btn.addEventListener('click', function () {
        const card = this.closest('.card-copy');

        const textToCopy = card.querySelector('.copy-text').innerText;

        navigator.clipboard.writeText(textToCopy);

        alert('Copied: ' + textToCopy);

        const currentCount = parseInt(copyCountDisplay.innerText);
        copyCountDisplay.innerText = currentCount + 1;
        
    });
}
