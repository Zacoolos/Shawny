let property_types = {};

let properties_finances;

let bought_properties = [];


function doPropertyFinances() {
    properties_finances = {
        incomes: (Math.random() * (60 - 20) + 40) / 100,
        expenses: (Math.random() * (40 - 10) + 10) / 100
    };
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

        addAction(`You bought ${property_type.name} for $${property_price.toLocaleString('en-US', { minimumFractionDigits: 2 })}`)

       
        doPropertyTypes();
        doPropertyButton(property_name);        
    }
}
