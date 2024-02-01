var item1;
var item2;
var item3;
    
document.getElementById("changeList").onclick = newList;
    
    function newList(){
    item1=prompt("html");
    item2=prompt("css");
    item3=prompt("JavaScript");
    updateList();
    }
function updateList() {
document.getElementById("o").innerHTML = item1;
document.getElementById("d").innerHTML = item2;
document.getElementById("g").innerHTML = item3;
}