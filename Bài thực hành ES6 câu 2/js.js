var smartPhones = [
    { name: 'iphone', price: 649 },
    { name: 'Galaxy S6', price: 576 },
    { name: 'Galaxy Note 5', price: 489 }
];

function displayPricesInRows() {
    var htmlString = "<table><tr><th>Name</th><th>Price</th></tr>";

    smartPhones.forEach(phone => {
        htmlString += `<tr><td>${phone.name}</td><td>$${phone.price}</td></tr>`;
    });

    htmlString += "</table>";

    document.getElementById("phonePrices").innerHTML = htmlString;
}

displayPricesInRows();
