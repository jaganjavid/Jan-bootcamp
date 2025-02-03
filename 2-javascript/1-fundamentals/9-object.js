


// objects are key and value pairs

const person = {

    // Property
     firstName:"Jagan",
     lastName:"Javid",
     age:27,
     email:"jj@email.com",
     hadDinner:false,
     hobbies:["music", "Sports"],
     address:{
        city:"Chennai",
        state:"TN"
    },
    //  Methode
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }

}


// Object (.)

let val;

val = person;


// Get a specific key

val = person.firstName; // ***
val = person["lastName"];
val = person.age;
val = person.email;
val = person.hadDinner;
val = person.hobbies[0];
val = person.hobbies[1];
val = person.address.city;
val = person.address.state;
val = person.getFullName();

console.log(val);