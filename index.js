// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'not bob';

function upperCaseCustomerName() {
    window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(modifiedBestCustomer) {
    window.bestCustomer = modifiedBestCustomer;
}

function changeLeastFavoriteCustomer(modifiedLeastFavoriteCustomer) {
    leastFavoriteCustomer = modifiedLeastFavoriteCustomer;
}