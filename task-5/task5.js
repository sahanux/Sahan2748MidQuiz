var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


readline.question('Please enter a number ' , function (number){

    if (number>=0) {
        if(number % 2 === 0) {
            console.log("Even Number");
        }
        else {
            console.log("Odd Number");
        }  
    } else {
        console.log("Plese try again")
    }
    readline.close();
})
