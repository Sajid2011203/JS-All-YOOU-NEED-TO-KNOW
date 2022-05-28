var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// var find = arr.find(function(value, index){
//     return value === 4
// })
// console.log(find)

// var findIndex = arr.findIndex(function(value){
//     return value === 9
// })
// console.log(findIndex)

// var str = ['Ashik', 'Habibullah', 'Tawhid', 'Mansur']

// var findStr = str.find(function(value){
//     return value === 'Ashik'
// })

// console.log(findStr)

// var findStrIndex = str.findIndex(function(value){
//     return value === 'Ashik'
// })

// console.log(findStrIndex)

function myFind(arr, cb){
    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            //return arr[i] //for finding value
            return i
        }
    }
}

var find = myFind(arr, function(value){
    return value === 9
})
console.log(find)