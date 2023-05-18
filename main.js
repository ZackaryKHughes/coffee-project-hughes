"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'Light', roasted: 'All'},
    {id: 2, name: 'Half City', roast: 'Light', roasted: 'All'},
    {id: 3, name: 'Cinnamon', roast: 'Light', roasted: 'All'},
    {id: 4, name: 'City', roast: 'Medium', roasted: 'All'},
    {id: 5, name: 'American', roast: 'Medium', roasted: 'All'},
    {id: 6, name: 'Breakfast', roast: 'Medium', roasted: 'All'},
    {id: 7, name: 'High', roast: 'Dark', roasted: 'All'},
    {id: 8, name: 'Continental', roast: 'Dark', roasted: 'All'},
    {id: 9, name: 'New Orleans', roast: 'Dark', roasted: 'All'},
    {id: 10, name: 'European', roast: 'Dark', roasted: 'All'},
    {id: 11, name: 'Espresso', roast: 'Dark', roasted: 'All'},
    {id: 12, name: 'Viennese', roast: 'Dark', roasted: 'All'},
    {id: 13, name: 'Italian', roast: 'Dark', roasted: 'All'},
    {id: 14, name: 'French', roast: 'Dark', roasted: 'All'}
];

//THIS FUNCTION CREATES TABLE
// function renderCoffee(coffee) {
//     let html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//     return html;
// }

//Tables are a little old school, you need to refactor the code so that each coffee is displayed in a div that contains a heading displaying the coffee name, and the type of roast in a paragraph. Don't display the ids, these are only for our application's internal use
function renderCoffee(coffee){
    let html = '<div class="coffee row">';
        html += '<h1>' + coffee.name +'</h1>';
        html += '<p class="opacity">'  + coffee.roast + '</p>';
        html += '</div>';
        return html;
}

//THIS FUNCTION ADDS COFFEE TO THE TABLE
function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//THIS FUNCTION STORES ID OF COFFEES AS TBODY
let tbody = document.querySelector('#coffees');

//THIS FUNCTION STORES ID OF R0AST-SELECTION AS ROAST SELECTION
let roastSelection = document.querySelector('#roast-selection');
// DISPLAYS ALL COFFEE IN HTML
tbody.innerHTML = renderCoffees(coffees);

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (coffee.roasted === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
function updateAllCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roasted === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// let submitButton = document.querySelector('#submit');

// submitButton.addEventListener('click', updateCoffees);

//Add functionality to search through the coffees by name, and display only the coffees that match the provided search term (You will need to add an input field to the existing form for this)
window.addEventListener("DOMContentLoaded", function(){
    document.getElementById('roast-selection').addEventListener("change", updateCoffees)
});

//This adds functionality to update the displayed coffee as the user types into the search box, or as soon as they select an option from the select.
(document).ready(function() {
    ("button").click(function() {
        ("#Find").val("");
        update(words)
    });

    let words = coffees.name;

    let selection = $(".selection"),
        input = $("input[type=search]"),
        label = $("label");

    function update(words) {
        selection.html("");
        $.each(words, function(i, word) {
            selection.append("<option value='" + word + "'>" + word + "</option>");
        });
        label.text("Results:" + selection.find("option").length);
    }

    input.on("input", function(e) {
        let val = e.target.value,
            keys = val.split(/\s+/),
            html = $.map(keys, function(key) {
                return $.grep(words, function(word) {
                    return word === key
                        || word.slice(0, key.length) === key
                        || word.indexOf(key) > -1
                })
            });

        console.log(html);
        update(html);
    });

    update(words);

});