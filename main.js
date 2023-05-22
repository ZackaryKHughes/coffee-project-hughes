"use strict";

function renderCoffee(coffee) {
  let html =
    '<div class="coffee bg-dark bg-gradient fw-bold p-0 row flex-wrap">';
  html += "<h1 class='card-title'>" + coffee.name + "</h1>";
  html += '<div class="roastType col-4 flex-wrap">';
  html += '<p class="opacity-75 p-0">' + coffee.roast + "</p></div>";
  html +=
    '<img class="icon col-4" src="img/coffee-icon.webp" alt="Hot Coffee" />';
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
function addCustomCoffee(e) {
  e.preventDefault(); // don't submit the form, we just want to update the data
  let selectedRoast = userRoastSelection.value;
  let userCoffeeName = document.querySelector("#user-coffee-name").value;
  let customCoffeeObj = {
    id: coffees.length + 1,
    name: userCoffeeName,
    roast: selectedRoast,
  };
  coffees.push(customCoffeeObj);

  display.innerHTML = renderCoffees(coffees);
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
let userRoastSelection = document.querySelector("#user-coffee-name");
let submitCustomButton = document.querySelector("#submit-custom");

roastSelection.addEventListener("change", updateCoffees);
sortCoffee.addEventListener("keyup", coffeeInput);
submitCustomButton.addEventListener("click", addCustomCoffee);

display.innerHTML = renderCoffees(coffees);
