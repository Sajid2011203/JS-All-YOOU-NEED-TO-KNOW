/* একটি কমন মেথড সবার মধ্যে শেয়ার হবে */

// function Shape() {
    
// }

// Shape.prototype = {
//     common: function () {
//         console.log('I am common');
//     }
// }

// function Square(width) {
//     this.width = width
//     this.draw = function () {
//         console.log('Drawing');
//     }
// }

// Square.prototype = Object.create(Shape.prototype)

// var shape = new Shape()
// var sqr = new Square(50)
// console.log(sqr);
// sqr.common()


// function Circle(width) {
//     this.width = width
//     this.draw = function () {
//         console.log('circle is drawing.');
//     }
// }

// Circle.prototype = Object.create(Shape.prototype)

// var circle = new Circle(45)

// console.log(circle);

// circle.common()

// function Common() {
    
// }

// Common.prototype = {
//     eat: function () {
//         console.log(this.name + ' is eating');
//     },

//     sleep: function () {
//         console.log('Person is sleeping');
//     }
// }

// function Person(name, age, cb) {
//     this.name = name
//     this.age = age
//     cb = cb(name)
// }

// Person.prototype = Object.create(Common.prototype)

// var common = new Common()

// var abdullah = new Person('Abdullah', 20, function (name) {
//     console.log(name + ' is Onest Alem');
// })

// console.log(abdullah);
// abdullah.eat()

// var nasim = new Person('Nasim', 25, function (name) {
//     console.log(name + ' is genias');
// })

// console.log(nasim);
// nasim.eat()

function sqrt(s1, s2) {
    
    var max_length = s1 + s2 - 1;
    var min_length = Math.max(s1, s2) - Math.min(s1, s2) + 1;

    
    console.log("Max = " + max_length)
    console.log("Min = " + min_length);
}

sqrt(8, 5)

