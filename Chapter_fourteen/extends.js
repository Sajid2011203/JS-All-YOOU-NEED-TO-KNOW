/* Extends Function*/
// function Extend(Parent, Child) {
//     Child.prototype = Object.create(Parent.prototype)
//     // Square.prototype = Object.create(Shape.prototype) এটা লাগবে না 

//     Child.prototype.constructor = Child // reset constructor Square

//     // Circle.prototype.constructor = Circle // reset constructor Circle এটা লাগবে না
// }


// function Shape(color) {
//     this.color = color
// }

// Shape.prototype = {
//     common: function () {
//         console.log('This is common mathod');
//     }
// }


// function Circle(width, color) {
//     Shape.call(this, color) // This is Super call
//     this.width = width

//     this.draw = function () {
//         console.log('I am Drawing');
//     }
// }



// function Square(width, color) {
//     this.width = width
//     Shape.call(this, color)
//     this.draw = function () {
//         console.log('I am Drawing.');
//     }
// }

// Extend(Shape, Square)

// var sqr = new Square(45, 'Green')

// Extend(Shape, Circle)
// var circle = new Circle(50, 'Red')


// console.log(circle);

// console.log(sqr);

