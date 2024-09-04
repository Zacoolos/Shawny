let property_types = {};

let properties_finances;

let bought_properties = [];


function doPropertyFinances() {
    properties_finances = {
        incomes: (Math.random() * (60 - 20) + 40) / 100,
        expenses: (Math.random() * (40 - 10) + 10) / 100
    }
}

function doPropertyTypes() {
    property_types = {
        "Apartement": {
            name: "Apartment",
            description: "Buy an apartement or pay rent monthly. (Cannot be rented)",
            price: Math.random() * (500000 - 50000) + 50000
        },
        "Condo": {
            name: "Condo",
            description: "Buy a luxury condo and enjoy the top view of the city from the confort of your couch.",
            price: Math.random() * (1000000 - 100000) + 100000
 
        },
        "House": {
            name: "House",
            description: "Buy a house and enjoy the peace and quiet of the suburbs.",
            price: Math.random() * (30000000 - 400000) + 400000
        },
        "Castle": {
            name: "Castle",
            description: "Buy a castle and live like a king.",
            price: Math.random() * (800000000 - 29000000) + 29000000
        },
        "Mansion": {
            name: "Mansion",
            description: "Buy a mansion and live like a millionaire.",
            price: Math.random() * (4000000000 - 500000000) + 500000000
        },
        "Planet": {
            name: "Planet",
            planet_name: "My gay planet",
            description: "Buy a planet and name it whatever you want. It is going to be part of the Nasa data.",
            price: 1000000000000
        }
    };
}

// property_name = property_types.name

function doPropertyButton(propertyName) {
    buttonID =  propertyName.toLowerCase() + 'Button';

    document.getElementById(buttonID).textContent = `Buy ${property_types[propertyName].name} ($${property_types[propertyName].price.toLocaleString('en-US', { minimumFractionDigits: 2 })})`;
}


doPropertyTypes();

doPropertyButton('Apartement');
doPropertyButton('Condo');
doPropertyButton('House');
doPropertyButton('Castle');
doPropertyButton('Mansion');
doPropertyButton('Planet');






// let apartmentPrice = Math.random() * (500000 - 120000) + 120000;
// let housePrice = Math.random() * (30000000 - 400000) + 400000;
// let castlePrice = Math.random() * (800000000 - 29000000) + 29000000;
// let planetPrice = Math.random() * (80000000000000 - 5000000000000) + 5000000000000;
// let retailStorePrice = Math.random() * (50000 - 15000) + 15000;


function openPropertyMenu() {
    document.getElementById('property-menu').style.display = 'block';
    document.getElementById('property-bttn').disabled = true;
    closeUpgradeMenu();
    closeCryptoGains();
    closeStats();
}


function closePropertyMenu() {
    document.getElementById('property-menu').style.display = 'none';
    document.getElementById('property-bttn').disabled = false;
}


function buyProperty(property_name) {
    property_type = property_types[property_name];
    property_price = property_type.price;

    if (money >= property_price) {
        money -= property_price;
        bought_properties.push({ name: property_type.name, price: property_price });


       
        doPropertyTypes();
        doPropertyButton(property_name);
  
        return console.log(`Bought ${property_type.name} for $${property_price.toFixed(2)}...`);
        
    }
}


function openRetailStore() {
    if (money > retailStorePrice) {
        money -= retailStorePrice;
        updateCounter();
        addAction("You just opened a retail store for $" + retailStorePrice.toFixed(2));

        const openRetailStoreButton = document.getElementById('openRetailStoreButton');
        openRetailStoreButton.disabled = true;
        properties.push('retail store');
    } else {
        alert("You don't have enough money to open up a retail store.")
    }
}

// function buyProperty(property, price) {
//     if (money >= price) {
//         money -= price;
//         addAction('Bought ' + property + ' for $' + price.toFixed(2));
//         properties.push({ name: property, price: price });

//         if (property === 'Retail Store') {
//             let incomeRate = Math.random() * (85 - 25) + 25; // Income between 25% and 85%
//             let expenseRate = Math.random() * (60 - 10) + 10; // Expense between 10% and 60%

//             setInterval(function () {
//                 let income = price * (incomeRate / 100);
//                 money += income;
//                 addAction(property + ': Income of $' + income.toFixed(2) + ' (' + incomeRate.toFixed(2) + '%)');
//                 updateCounter();
//             }, 30000);

//             setInterval(function () {
//                 let expense = price * (expenseRate / 100);
//                 money -= expense;
//                 addAction(property + ': Expense of $' + expense.toFixed(2) + ' (' + expenseRate.toFixed(2) + '%)');
//                 updateCounter();
//             }, 30000);

//         } else if (property === 'Planet Earth' || property === 'Planet') {
//             let planetIncome = Math.random() * (1500000000000 - 2000000000) + 2000000000;
//             let planetExpense = Math.random() * (2000000000000 - 6000000000) + 6000000000;
//             setInterval(function () {
//                 money += planetIncome; // Add income
//                 addAction(property + ': Income of $' + planetIncome.toFixed(2));
//                 updateCounter();
//             }, 30000);
//             setInterval(function () {
//                 money -= planetExpense; // Deduct expense
//                 addAction(property + ': Expense of $' + planetExpense.toFixed(2));
//                 updateCounter();
//             }, 30000);
//         } else {
//             let incomeRate = Math.random() * (60 - 10) + 10;
//             let expenseRate = Math.random() * (8 - 3) + 3;
//             setInterval(function () {
//                 let income = price * (incomeRate / 100);
//                 money += income;
//                 addAction(property + ': Income of $' + income.toFixed(2) + ' (' + incomeRate.toFixed(2) + '%)');
//                 updateCounter();
//             }, 30000);
//             setInterval(function () {
//                 let expense = price * (expenseRate / 100);
//                 money -= expense;
//                 addAction(property + ': Expense of $' + expense.toFixed(2) + ' (' + expenseRate.toFixed(2) + '%)');
//                 updateCounter();
//             }, 30000);
//         }

//         updateCounter();
//     } else {
//         alert("You don't have enough money to buy this property.");
//     }
// }
