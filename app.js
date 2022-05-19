'use strict';

let saleSection = document.getElementById('store-profiles');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// console.log(saleSection);

function ranCustomerNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let StoreSales = [];

class Store {
  constructor(name, minCust, maxCust, avgCookiesSale) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookiesSale;
    this.totalCookies = 0;
    this.numCookiesSold = 0;
    this.cookieArray = [];
    this.avgCookieSold();
    StoreSales.push(this);
  }
  ranCustomerNum() {
    this.ranCustomerNum = `${ranCustomerNum(this.minCust, this.maxCust)}`;
  }

  avgCookieSold() {
    for (let i = 0; i < hours.length; i++) {
      let numCookiesSold = Math.ceil(ranCustomerNum(this.minCust, this.maxCust) * this.avgCookieSale);
      this.totalCookies = this.totalCookies + numCookiesSold;
      this.cookieArray.push(numCookiesSold);
    }
  }

  render() {
    let trElem = document.createElement('tr');
    saleSection.appendChild(trElem);
    let dataCell = document.createElement('td');
    dataCell.textContent = this.name;
    trElem.appendChild(dataCell);

    for (let i = 0; i < hours.length; i++) {
      let dataCell = document.createElement('td');
      dataCell.textContent = this.cookieArray[i];
      trElem.appendChild(dataCell);
    }

    let cookieTotal = document.createElement('td');
    cookieTotal.textContent = this.totalCookies;
    trElem.appendChild(cookieTotal);
  }
}

function cookieStores() {
  for (let i = 0; i < StoreSales.length; i++) {
    StoreSales[i].render();
  }
}

function cookieStuff() {
  let row1 = document.createElement('tr');
  saleSection.appendChild(row1);
  let newTable = document.createElement('th');
  row1.appendChild(newTable);
  newTable.textContent = 'Store Location';
  for (let i = 0; i < hours.length; i++) {
    let thElem = document.createElement('th');
    row1.appendChild(thElem);
    thElem.textContent = `${hours[i]}`;
  }

  let totalTableHead = document.createElement('th');
  row1.appendChild(totalTableHead);
  totalTableHead.textContent = 'Daily Total';
}

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

cookieStuff();
cookieStores();
