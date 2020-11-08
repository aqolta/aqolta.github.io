"use strict"

String.prototype.filter = function(...str) {
    return this.split(' ').filter((word) => str.indexOf(word) < 0).join(" ");
};

Array.prototype.bubbleSort = function() {
    let len = this.length;
    for (let i = 0; i < len; ++i) {
        for (let j = 0; j < len; ++j) {
            if (this[j] > this[j + 1]) {
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
};


function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function() {
    return "Greetings, my name is " + this.name + " and I am " + this.age + " years old.";
}

function Teacher(name, age) {
    this.name = name;
    this.age = age;
}

Teacher.prototype.__proto__ = Person.prototype;

Teacher.prototype.teach = function(subject) {
    return this.name + " is now teaching " + subject;
}

let teacher1 = new Teacher("Andrew", 30);
console.log(teacher1.teach("ASD"));

let teacher2 = new Teacher("Andrew", 30)

console.log(teacher2.describe());


function myFunctionArrayTest(expected, found) {
    if (JSON.stringify(expected) === JSON.stringify(found())) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found();
    }
}

function myFunctionTest(expected, found) {
    if (expected === found()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found();
    }
}

console.log("Filter \'This house is not nice!\' by [not] is This house is nice!: " + myFunctionTest("This house is nice!", () => "This house is not nice!".filter("not")));
console.log("Filter \'This house is not nice!\' by [not, house] is This is nice!: " + myFunctionTest("This is nice!", () => "This house is not nice!".filter("not", "house")));

console.log("Sort [6,4,0, 3,-2,1] by bubbleSort is [-2,0,1,3,4,6]: " + myFunctionArrayTest([-2, 0, 1, 3, 4, 6], () => [6, 4, 0, 3, -2, 1].bubbleSort()));
console.log("Sort [9,13,5,-4,5,2,-2] by bubbleSort is [-4,-2,2,5,5,9,13]: " + myFunctionArrayTest([-4, -2, 2, 5, 5, 9, 13], () => [9, 13, 5, -4, 5, 2, -2].bubbleSort()));

console.log("Teacher Test - tech() method: " + myFunctionTest("Andrew is now teaching ASD", () => new Teacher("Andrew", 29).teach("ASD")));
console.log("Teacher Test - describe() method: " + myFunctionTest("Greetings, my name is Andrew and I am 30 years old.", () => new Teacher("Andrew", 30).describe()));