

// Two phases

// 1 - creatation
// 2 - Excutation

// Function statement

// greet();

function greet(firstName = "John", lastName = "Doe"){

    // Default parameters
    // if(typeof firstName === "undefined"){
    //     firstName = "John"
    // }

    // if(typeof lastName === "undefined"){
    //     lastName = "Doe"
    // }

    console.log(`Hello ${firstName} ${lastName}`);
}

// greet("Jagan", "Javid");


// greet("x", "y");


// Function expression

// console.log(add(10));

const add = function(x = 5){
    return x + 10;
}

console.log(add(10));


