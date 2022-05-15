var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// var sum = arr.reduce(function(prev, corr, index, arr){
//     return prev + corr
// }) 

// console.log(sum);

// var max = arr.reduce(function(prev, corr){
//     return Math.max(prev, corr)
// })

// console.log(max)

// var min = arr.reduce(function(prev, corr){
//     return Math.min(prev, corr)
// })
// console.log(min);

// function reduce(arr, cb, acc){
//     for(var i = 0; i < arr.length; i++){
//         acc = cb(acc, arr[i])
//     }
//     return acc
// }

// var sum = reduce(arr, function(prev, corr){
//     return prev + corr
// }, 0)

// console.log(sum)

// var max = reduce(arr, function(prev, corr){
//     return Math.max(prev, corr)
// }, 0)

// console.log(max)

// var min = reduce(arr, function(prev, corr){
//     return Math.min(prev, corr)
// }, arr[0])

// console.log(min)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var arr2 = arr.reduce(function(prev, corr){
    return prev + corr
})

console.log(arr)
console.log(arr2)