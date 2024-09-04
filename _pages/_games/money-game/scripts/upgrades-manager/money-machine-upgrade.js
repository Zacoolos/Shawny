let moneyMachinePrice = 500;
let moneyMachinePercentage = Math.random() * (100 - 25) + 25;


const money_machine_button = document.getElementById('moneyMachineButton');


function buyMoneyMachine() {
    if (money >= moneyMachinePrice && money < 10000000) {
        money -= moneyMachinePrice;
        moneyPerTap = moneyPerTap + moneyPerTap * moneyMachinePercentage / 100;
        moneyMachinePrice = Math.min(moneyMachinePrice * 1.6, 10000000);
        money_machine_button.textContent = 'Buy Money Machine ($' + moneyMachinePrice.toFixed(2) + ')';
        addAction('Bought Money Machine for $' + moneyMachinePrice.toFixed(2) + '.' + ' Your physical gains will be of ' + moneyMachinePercentage.toFixed(0) + '%');
        updateCounter();

    } else if (money < moneyMachinePrice) {
        alert("You don't have enough money to buy this upgrade.");
    } else if (money > 10000000) {
        alert("You have too much money to buy this upgrade.");
    }
}

