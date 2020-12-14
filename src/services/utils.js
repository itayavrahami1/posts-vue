export const utilService = {
    getPrice,
    getDate
}

function getPrice(price, currencyCode) {
    const options = { style: 'currency', currency: currencyCode };

    var priceToPrev
    switch (currencyCode) {
        case 'ILS':
            priceToPrev = new Intl.NumberFormat('he-HE', options).format(price);
            break;
        case 'USD':
            priceToPrev = new Intl.NumberFormat('en-EN', options).format(price);
            break;
        case 'EUR':
            priceToPrev = new Intl.NumberFormat('en-EN', options).format(price);
            break;
        default:
            break
    }

    return priceToPrev;
}

function getDate(datetime = Date.now()) {
    // const datetime = Date.now(); // anything
    const date = new Date(datetime);
    const options = {
        year: 'numeric', month: 'short', day: 'numeric',
    };
    const dateToReturn = date.toLocaleDateString('en-US', options); 
    console.log(dateToReturn);
    return dateToReturn
}