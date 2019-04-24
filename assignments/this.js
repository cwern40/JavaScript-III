/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: the value will be the window/console object when in the globla scope.
* 2. Implicit Binding: when a function called by a preceeding dot then the object before is this. 
* 3. New Binding: whenever a contructor function is used then the new object created and returned by the contructor function is this.
* 4. Explicit Binding: Whenever the call or apply method is used then we define "this" in that method.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function global(country) {
    console.log(this);
    return country;
}

// Principle 2

// code example for Implicit Binding
const country = {
    name: "Christopia",
    population: 200,
    size: "small",
    growth: function(rate) {
        return `${this.name} grows at ${rate} people per year`;
    }
}

console.log(country.growth(15));

// Principle 3

// code example for New Binding

function profile(user) {
    this.name = user.name;
    this.age = user.age;
    this.hobby = user.hobby;
}

const john = new profile ({
    name: "John Doe",
    age: 27,
    hobby: "sports",
});

console.log(john);

// Principle 4

// code example for Explicit Binding

let person = {
    fullname: function() {
        return `${this.first} ${this.last}`;
    }
}

let person1 = {
    first: 'Bob',
    last: 'Smith'
}

console.log(person.fullname.call(person1));