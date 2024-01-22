var dreamCar = {    
    make: "Mercedes Benz",    
    model: "A45",    
    color: "red",    
    year: 2024,    
    bodyStyle: "Luxury Car",    
    price: 7000 };

    document.getElementById("pricetag").innerHTML = dreamCar.price;

    document.getElementById("modelyear").innerHTML = dreamCar.year;

    document.getElementById("body").style.backgroundColor = dreamCar.color;

    document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;