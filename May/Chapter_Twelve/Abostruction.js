// Private properties

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

//     this.draw = function () {
//         console.log("I am Ractangle")
//         printProperties()
//         console.log("The X ix = " + position.x, "The y is = " + position.y)
//     }
// }

// var rect1 = new createRect(5, 6)
// rect1.draw()

// var createLaptop = function (name, processor, ram, storage) {
     
//     this.name = name
//     this.processor = processor
//     this.ram = ram
//     this.storage = storage


//     var printProperties = function () {
//         console.log('Laptop Model : ' + this.name);
//         console.log('Processor : ' + this.processor);
//         console.log('Ram: ' + this.ram);
//         console.log('Storage : ' + this.storage);
//     }.bind(this)

//     this.description = function () {
//         console.log('Description:-')
//         printProperties()
//     }

// }
// var Laptop = new createLaptop('HP EliteBook 840 G3', 'Intel Core I5 5300u', '8 GB DDR4', '256 SSD')

// Laptop.description()



// var Window = function (width, height, color) {
//     this.width = width
//     this.height = height
//     this.color = color

    
//     var openWindow = function () {
        // console.log(`It's widht is: ` + this.width);
        // console.log(`It's height is: ` + this.height);
        // console.log(`and color is: ` + this.color);
//     }.bind(this)

//     this.open = function () {
//         console.log('This is window.');
//         openWindow()
//     }
// }

// var window1 = new Window(30, 50, 'Red')
// window1.open()