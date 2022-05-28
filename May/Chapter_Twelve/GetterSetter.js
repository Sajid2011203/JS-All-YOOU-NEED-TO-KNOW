// var createRect = function (width, height) {
//     this.width = width
//     this.height = height

//     var position = {
//         x: 20,
//         y: 10,
//     }

//     var printProperties = function () {
//         console.log("The Width is = " + this.width)
//         console.log("The height is = " + this.height)
//     }.bind(this)

//     this.getPosition = function () {
//         return position
//     }

    // Object.defineProperty(this, 'position', {
    //     get: function() {
    //         return position
    //     },
    //     set: function (value) {
    //         return value

    //     }
    // })

//     this.draw = function () {
//         console.log("I am Ractangle")
//         printProperties()
//         console.log("The X ix = " + position.x, "The y is = " + position.y)
//     }
// }

// var rect1 = new createRect(5, 6)
// console.log(rect1.getPosition())

// var Window = function (width, height, color) {
//     this.width = width
//     this.height = height
//     this.color = color

//     var openWindow = function () {
//         console.log(`It's widht is: ` + this.width)
//         console.log(`It's height is: ` + this.height)
//         console.log(`and color is: ` + this.color)
//     }.bind(this)

//     this.open = function () {
//         console.log("This is window.")
//         openWindow()
//     }

//     // this.getopenWindow = function () {
//     //     return openWindow()
//     // }
//     Object.defineProperty(this, 'openWindow', {
//         get: function () {
//             return openWindow
//         }
//     })
// }

// var hi = new Window(30, 50, "Red")
// hi.getopenWindow()
// hi.openWindow()
