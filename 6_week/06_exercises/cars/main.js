"use strict";

const addCarForm = document.querySelector("#addCar");
const searchCarForm = document.querySelector("#searchCar");
const carsTable = document.querySelector("#carsTable");
const searchResult = document.querySelector("#searchResult");
const cars = [];

class Car {
  constructor(license, maker, model, owner, price, color) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

const defaultSearchResult = () => {};

const addCar = (e) => {
  e.preventDefault();

  const license = document.querySelector("#license").value;
  const maker = document.querySelector("#maker").value;
  const model = document.querySelector("#model").value;
  const owner = document.querySelector("#owner").value;
  const price = document.querySelector("#price").value;
  const color = document.querySelector("#color").value;
  console.log(license, maker, model, owner, price, color);

  const newCar = new Car(license, maker, model, owner, price, color);

  cars.push(newCar);
  displayTable();
};

/* Keeping search data in a table */
const displayTable = () => {
  const table = document.querySelector("#carsTable");

  table.innerHTML = table.rows[0].innerHTML;

  cars.forEach((car) => {
    const row = table.insertRow(-1);

    Object.values(car).forEach((text) => {
      const cell = row.insertCell(-1);
      cell.textContent = text;
    });
  });
};

/* Search operation */

const searchResultText = document.querySelector("#searchResult").value;
const searchCar = (e) => {
  e.preventDefault();
  if (cars.includes(license)) {
    console.log(searchResultText);
  } else {
  }
};

addCarForm.addEventListener("submit", addCar);
searchCarForm.addEventListener("submit", searchCar);
