const month = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
};

let monthLength = 30000;

let year = 0;
let monthIndex = 1;


function yearManager() {
    if (monthIndex < 12) {
        monthIndex++;
    } else {
        monthIndex = 1;
        year++;
    }
}

function updateStats() {
    const time = document.getElementById('time-of-year');
    const age = document.getElementById('age');
    const your_money = document.getElementById('current-money');


    time.textContent = `Current month: ${month[monthIndex]}`;
    age.textContent = `You have existed for: ${year} year(s) and ${monthIndex - 1} months.`;
    your_money.textContent = `Your money: $${money.toFixed(0)}`;
}



setInterval(() => {

    let interestRate = Math.random() * (1.3 - 0.003) + 0.003;
    let interest = money * (interestRate / 100);

    money += interest;
    addAction('Interest Rate: ' + interestRate.toFixed(3) + '%');

    if (spammUpgrade) {
        addAction('Your spamm technique stopped working, the very smart tech people patched it.');
        document.getElementById('spammUpgradeButton').disabled = false;
        spammUpgrade = false;
    }

    let taxesRate = Math.random(25 - 10) + 10;
    let taxesAmount = money * (taxesRate / 100);
    if (money > 20000) {
        money -= taxesAmount;
        addAction('You payed $' + taxesAmount.toFixed(2) + ' in taxes: ' + taxesRate.toFixed(0) + '%');
    }

    getPaycheck();
    yearManager();
    updateStats();
    updateCounter();
    updateCrypto();

}, monthLength);


updateStats();