let money = 0;


let moneyPerTap = 1;


let taps_per_seconds = 0;
let autoclicker_ban = false;


document.addEventListener('click', tapScreen);



document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        buttonSound();
    });
});


function tapScreen() {
    money += moneyPerTap;
    taps_per_seconds += 1;
    // console.log(taps_per_seconds);
    updateCounter();
    moneySound();
}



setInterval(() => {
    if (taps_per_seconds > 20 && !autoclicker_ban) {
        alert('It seems like you are using an autoclicker. Next time you use it, the page will reload. A solution would be to buy the spamm upgrade from the upgrade menu');
        autoclicker_ban = true
    } else if (taps_per_seconds > 20 && autoclicker_ban == true) {
        location.reload();
        alert('It seems like you have used an autoclicker once again. The page will now reload.');
    }

    taps_per_seconds = 0;
}, 1000);

function startGame() {
    start_menu_music.pause();
    document.getElementById('menu').remove();
}



function addAction(actionText) {
    let actionElement = document.createElement('div')

    actionElement.classList.add('action')
    actionElement.textContent = actionText

    document.getElementById('actions').prepend(actionElement)
}




function updateCounter() {
    const formattedMoney = money.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    document.getElementById('counter').textContent = 'Money: ' + '$' + formattedMoney;

    if (money > 99999999999999999999) {
        document.getElementById('counter').textContent = 'Money: ∞'
    }

    if (money < -100000) {

        alert('You went bankrupt, the bank took all your assets.');
        money = 0;
        properties = [];
        document.getElementById('actions').innerHTML = '';
        addAction('Fresh start');
        updateCounter();
    }
}


function openBrowser() {
    document.getElementById('browser').style.display = 'block'
}


function closeBrowser() {
    document.getElementById('browser').style.display = 'none'
}


function viewStats() {
    document.getElementById('browser').style.display = 'block'
    document.getElementById('stats-menu').style.display = 'block'
    document.getElementById('stats-bttn').disabled = true;
    closePropertyMenu()
    closeCryptoGains()
    closeUpgradeMenu()
}

function closeStats() {
    document.getElementById('stats-menu').style.display = 'none'
    document.getElementById('stats-bttn').disabled = false;
}


setInterval(function () {
    let eventChance = Math.random() * 1;

    if (eventChance === 0.001) {

        money = 0;
        properties = [];

        addAction('You lost your memory, you don\'t remember anything, not even your bank account number.');

    } else if (eventChance === 0.005) {

        let stolenAmount = money * (Math.random() * (75 - 0) - 0) / 100;
        money -= stolenAmount

        addAction('Someone hacked into your bank and robbed ' + percentage + '% of your money ($' + stolenAmount.toFixed(2) + '), the bank couldn\'t do anything. Sorry!')

    } else if (eventChance <= 0.002) {

        if (confirm('You died of an unknown reason. Do you want to restart?')) {
            location.reload()
        }

    }

}, Math.random() * 120000 + 30000);
