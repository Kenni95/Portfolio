var favoriteFoods = [];

var people = ["Mary", "Bobby", "Judy", "Eddie"];
var otherPeople = ["Teddy", "Cathy", "G-berg", "Georgie"];

document.getElementById("peopleIKnow").innerHTML = people.toString();
document.getElementById("otherPeople").innerHTML = otherPeople.toString();

//Concat
concat = people.concat(otherPeople);

//indexOf
people = people.indexOf("Eddie");

//Join
people = people.join(" # ");

//lastIndexOf()
people = people.lastIndexOf("Bobby");

//Pop
people = people.pop();

//Push
people = people.push("Teddy");

//Reverse
people = people.reverse();

//shift() unshift()
people.shift();
people.unshift("Teddy");

//Slice
people = people.slice(0,3);

//Sort
people = people.sort();

//Splice
people.splice(1,0,"Cathy");


