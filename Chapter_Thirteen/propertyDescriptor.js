/*
Property Descriptor কি?

একটি object এর property বাইরে থেকে accessable কিনা? itarable কিনা এবং writeable কিনা এই বিষয় গুলো describe করে property descriptor, 
*/

// var person = {
//     name: 'Nayem'
// }
// console.log(Object.keys(person));
// var descriptor = Object.getOwnPropertyDescriptor(person, 'name')//For seeing Property Descriptor

// console.log(descriptor)




// for (var i in person) {
//     console.log(i);
// }


// Object.defineProperty(person, 'name', {
//     enumerable: false,
//     writable: false,
//     configurable: false
// })

// console.log(Object.getOwnPropertyDescriptor(person, 'name')); // see descriptor are fasle

// console.log(Object.keys(person)); // I wont see Object key

// person.name = 'Hamid' // I wont change the value

// console.log(person.name); // that is the proof, result is Nayem

// for (var i in person) {
//     console.log(i);
// } // I wont Itarate

// var objBase = Object.getPrototypeOf(person)

// var tostr = Object.getOwnPropertyDescriptor(objBase, 'toString')
// console.log(tostr); // for seeing toString Property Descriptor


// function Person(name, age) {
//     this.name = name
//     this.age = age
// }

// let person = new Person('Asif', 50)

// console.log(Object.getOwnPropertyDescriptor(Person, 'name'))

// Object.defineProperty(Person, 'name', {
//     writable: false,
//     configurable: false,
//     enumerable: false,
//     value: 'Nayem'
// })

// console.dir(Person);
