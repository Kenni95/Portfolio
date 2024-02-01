var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
var d = new Date();

// call the displayDate()function
displayDate();

function displayDate() {
    // todo: display the current date in the todaysdate div
    todayDate.innerHTML  = d;
    todayDate.innerHTML = d.toDateString ();
}

function displayDate() {
    // todo: display the current date in the todaysdate div
    todayDate.innerHTML = d;
    todayDate.innerHTML = d.toDateString();
    }

    function displayActivity() {
        var dayOfWeek = d.getDay();
        var youShould;

        switch (dayOfWeek) {
            case 0: youShould = "100 Push ups in the morning!";
            break;

            case 1: youShould = "Work on your abs!";
            break;

            case 2: youShould = "It's Leg Day!";
            break;

            case 3: youShould = "Do burpees and break a sweat!";
            break;

            case 4: youShould = "Work on your cardio!";
            break;

            case 5: youShould = "Go haaard and do all the exercises!";
            break;

            case 6: youShould = "Take it easy. You've earned it!";
            break;

            default:
            youShould = "Hmm. Something has gone wrong.";
            break;
        }

        document.getElementById("thingToDo").innerHTML = youShould
        
    // todo: find out the day of the week
    /* todo: set a variable, called youShould, with a
different string based on what day of the
week it is. */

// todo: output the value of youShould into the thingToDo div

}