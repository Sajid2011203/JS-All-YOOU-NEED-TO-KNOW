var arr = [1, 2, 3, 4, 5, 6, 8, 9, 35, 7, 22, 33, 44, 55]

// var filterdArr = arr.filter(function(value){
//     return value % 2 === 1
// })
// console.log(arr)
// console.log(filterdArr)

function filter(arr, cb){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(filter(arr, function(value){
    return value % 2 === 0
}))
console.log(filter(arr, function(value){
    return value % 2 === 1
}))

console.log(filter(arr, function(value){
    return value > 5
}))