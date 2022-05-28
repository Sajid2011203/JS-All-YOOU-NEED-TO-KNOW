// this এর ক্ষেত্রে ৩ টি বিষয় লক্ষ রাখতে হবে ১। This সর্বদা তার নিজের অবজেক্টকে রেফার করবে। ২, নিজের অবজেক্ট না পেলে Window অবজেক্টকে রেফার করবে। ৩, সে Exicutional context এর ঠিক আগ মুহুর্তে ভালু পায়।
// var rect = {
//     width: 100,
//     height: 50,

//     draw: function () {
//         console.log('I am ractangle')
//         this.print()
        
//     },

//     print: function () {
//         console.log("This is rectangle Width: " + this.width)
//         console.log("This is rectangle height: " + this.height)
//     }
// }

// rect.draw()

// var another = {
//     width: 45,
//     height: 56,

//     print: rect.draw()

// }
// another.print

// function the() {
//     console.log(this)
// }

// the()

var Square = function (width, height) {
    this.width = width
    this.height = height

    this.print = function () {
        console.log('I am Rectangle');
        this.printProperties()
    }

    this.printProperties = function () {
        console.log('Rectangle Width is = ' + this.width);
        console.log('Rectangle Height is = ' + this.height);
    }
}

function myNew(constructor) {
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var arrgsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, arrgsArray.slice(1))

    return obj
}


var rect = myNew(Square, 50, 100)

rect.print()
