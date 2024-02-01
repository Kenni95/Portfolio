
// create days of week array
//Create Variables for days

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

//Create Variables for weather
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

//Create Variables for temperatures
var maxTemp = 110;
var minTemp = 32;

// cost (to you) of a cup of lemonade
//Create Variables for lemonade cost
var lemonadeCost = 0.5;

// //Create an empty array to store daily temps
var dailyTemp = [];

// listen for order
document.getElementById("OpenTheStand").addEventListener("click", openTheStand);

// Generates weather for the week
generateWeather();

/**
Create Create two function variables
**/ 

function generateWeather() {
    var weatherToday;
    var tempToday;

    //Create a for loop to cyle each day of the week
    for (var i = 0; i < days.length; i++) {

        //assign math.random and assign it to the first variable
        weatherToday = weather[Math.floor(Math.random() * weather.length)];
        
        //Get a random temperature between Max or Min variables we saved ealier
        tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

        //store the temperature in daily temp array which was an empty array
        dailyTemp[i] = tempToday;

        //Output a message describing todays weather
        document.getElementById("5DayWeather").innerHTML += "<div id='" +
        days[i] + "' class='" + weatherToday +
        "'><b>Forecast for " + days[i] + ":</b><br><br>" +
        weatherToday + " and " + tempToday + " degrees.</div>";
    }
}

/**
calculates glasses of lemonade sold
**/
function openTheStand() {

    var glassesSold = 0; // daily
    var totalGlasses = 0; // weekly
    var glassesLeft = 0; // left to sell

    // clear out previous results
    resetForm();

    // Get the values from the form fields in our HTML

    var numGlasses = Number(document.getElementById("numGlasses").value);
    var glassPrice = Number(document.getElementById("glassPrice").value);

   // Create a loop to cycle through each day of the week
    for (var i = 0; i < days.length; i++) {

        // glasses sold depends on temp and price
        glassesSold = Math.floor(dailyTemp[i] / glassPrice);

        // how many glasses do we have now?
        glassesLeft = numGlasses - totalGlasses;

        // we can't sell more than we have
        if (glassesSold > glassesLeft) {
            glassesSold = glassesLeft;
        }

        // increase the weekly total
        totalGlasses = glassesSold + totalGlasses;

        // display daily total
        document.getElementById("result").innerHTML += "<p>" + days[i] + ", you sold " + glassesSold + " glasses of lemonade.</p>";

    }

    //call display results
    displayResults(numGlasses, glassPrice, totalGlasses);

}

/**
calculates results and displays a report
**/
function displayResults(weeklyInventory, glassPrice, weeklySales) {
    // calculate results
    // calculate total revenue
    var revenue = weeklySales * glassPrice;

    //calculate expenses
    var expense = weeklyInventory * lemonadeCost;

    //calculate how many glasses are left
    var leftOver = weeklyInventory - weeklySales;

    //calculate profits
    var profit = revenue - expense;

    // print out the weekly report
    document.getElementById("result").innerHTML += "<p>You sold a total of " + weeklySales + " glasses of lemonade this week.</p>";
    document.getElementById("result").innerHTML += "<p>Total revenue: $" + revenue + ".</p>";
    document.getElementById("result").innerHTML += "<p>You have " + leftOver + " glasses of lemonade left over.</p>";
    document.getElementById("result").innerHTML += "<p>Each glass costs you $" + lemonadeCost + ". Your profit was $" + profit + ".";
}

/**
resets the game so that a new order can be placed
**/
function resetForm() {
    document.getElementById("result").innerHTML = "";

}

