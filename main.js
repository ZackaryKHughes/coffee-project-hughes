"use strict";

function renderCoffee(coffee) {
  let html = '<div class="card coffee row">';
  html += '<h1 class="p-0 flex-wrap">' + coffee.name + "</h1>";
  html += '<p class="opacity-75 fw-bold p-0">' + coffee.roast + "</p>";
  html += "</div>";
  return html;
}

function renderCoffees(coffees) {
  let html = "";
  for (let i = 0; i < coffees.length; i++) {
    html += renderCoffee(coffees[i]);
  }
  return html;
}

function updateCoffees(e) {
  e.preventDefault(); // don't submit the form, we just want to update the data
  let selectedRoast = roastSelection.value;
  let filteredCoffees = [];
  coffees.forEach(function (coffee) {
    if (coffee.roast === selectedRoast) {
      filteredCoffees.push(coffee);
    } else if (coffee.name === selectedRoast) {
      filteredCoffees.push(coffee);
    } else if (coffee.roasted === selectedRoast) {
      filteredCoffees.push(coffee);
    }
  });
  display.innerHTML = renderCoffees(filteredCoffees);
}
function updateAllCoffees(e) {
  e.preventDefault(); // don't submit the form, we just want to update the data
  let input = document.getElementById("update");
  let filter = input.value.toUpperCase();
  let filteredCoffees = [];
  coffees.forEach(function (coffee) {
    if (coffee.name === filter) {
      filteredCoffees.push(coffee);
    }
  });
  display.innerHTML = renderCoffees(filteredCoffees);
}

function coffeeInput() {
  let arr = [];
  coffees.forEach(function (coffee) {
    if (coffee.name.toLowerCase().startsWith(sortCoffee.value.toLowerCase())) {
      arr.push(coffee);
    }
  });
  console.log(sortCoffee.value);
  display.innerHTML = renderCoffees(arr);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
  { id: 1, name: "Light City", roast: "Light", roasted: "All" },
  { id: 2, name: "Half City", roast: "Light", roasted: "All" },
  { id: 3, name: "Cinnamon", roast: "Light", roasted: "All" },
  { id: 4, name: "City", roast: "Medium", roasted: "All" },
  { id: 5, name: "American", roast: "Medium", roasted: "All" },
  { id: 6, name: "Breakfast", roast: "Medium", roasted: "All" },
  { id: 7, name: "High", roast: "Dark", roasted: "All" },
  { id: 8, name: "Continental", roast: "Dark", roasted: "All" },
  { id: 9, name: "New Orleans", roast: "Dark", roasted: "All" },
  { id: 10, name: "European", roast: "Dark", roasted: "All" },
  { id: 11, name: "Espresso", roast: "Dark", roasted: "All" },
  { id: 12, name: "Viennese", roast: "Dark", roasted: "All" },
  { id: 13, name: "Italian", roast: "Dark", roasted: "All" },
  { id: 14, name: "French", roast: "Dark", roasted: "All" },
];

let display = document.querySelector("#coffees");
let sortCoffee = document.querySelector("#coffee-input");
let roastSelection = document.querySelector("#roast-selection");

roastSelection.addEventListener("change", updateCoffees);
sortCoffee.addEventListener("keyup", coffeeInput);

display.innerHTML = renderCoffees(coffees);
