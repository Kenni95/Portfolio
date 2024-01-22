// for (var counter = 0; counter < 500;counter++) {
//     console.log(counter + ":Hello, Javascript!");
// }

// for (var i = 10; i > 0; i--) {
//     alert (i);
//     }
//     alert ("Blast Off!");

// var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// for (var i = 0; i < myFriends.length; i++){
// alert(myFriends[i] + " is my friend.");
// }

// alert(Math.random() * 11);

// alert(Math.floor(Math.random() * (1000 - 100) + 100));


//Writing the app

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];
var maxTemp = 100;
var minTemp = 0;



function generateWeather() {
    for (var i = 0; i < days.length; i++) {
        var weatherToday = weather[Math.floor(Math.random() * weather.length)];
        var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
    }
}

generateWeather();