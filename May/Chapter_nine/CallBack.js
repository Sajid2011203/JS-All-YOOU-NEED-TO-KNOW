
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// function greeting(name) {
//     alert('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);

// function sample(a, b, cb){
//     var c = a + b
//     var d = b + a
//     var result = cb(c, d)
//     return result
// }

// var multiple = sample(5, 5, function(c, d){
//     return c * d
// })
// console.log(multiple)

// var sum = sample(5, 5, function(c, d){
//     return c + d
// })

// console.log(sum)

// var sub = sample(5, 5, function(c, d){
//     return c - d
// })

// console.log(sub)

// var devide = sample(5, 5, function(c, d){
//     return c / d
// })

// console.log(devide)

  
function print(data) {
    console.log(data)
}



print('NM nayem')