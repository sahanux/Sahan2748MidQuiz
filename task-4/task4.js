
// Task 2
function Arrayfunc(){
    var movies = ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"];

    movies = [];
    movies.push("dasda");
    movies.push("asfasf");
    movies.push("dasfads");
    movies.push("Ironman");

    var forthArrayVal = movies[3];
    if (forthArrayVal.charAt(0) === "I") {

        console.log("Yay");
        
    } else {
        console.log("Nay");
        
    }

}

// Task3
function Objectfunc(){
    var car = {model:"Mazda", color:"Black", price: 80};

    if (car.price>50){
        console.log("Expensive");
    }

    else{
        console.log("Affordable");
    }

    console.log(car.color);
}

// Call functions
Arrayfunc();
Objectfunc();