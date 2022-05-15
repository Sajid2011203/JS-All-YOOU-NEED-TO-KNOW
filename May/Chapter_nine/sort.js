var arr = [
    {
        name: 'A',
        age: 39
    },

    {
        name: 'B',
        age: 18
    },

    {
        name: 'C',
        age: 23
    },  

    {
        name: 'D',
        age: 49
    }

]

var arrNumber = [5,3,6,8,2,1,6,7,-7,4,3,1,3,-4,5,-1,6,7,7,8,9,8]


// Ascending Order
var result = arrNumber.sort(function(a, b){
    if(a > b){
        return 1
    } else if(a < b){
        return -1
    } else{
        return 0
    }
})
console.log(result);

// Dscending Order

var DscendingNumber = arrNumber.sort(function(a, b){
    if(a > b){
        return -1
    }else if(a < b){
        return 1
    }else{
        return 0
    }
})

console.log(DscendingNumber)

// Sort Array's Object

var sortobj = arr.sort(function(a, b){
    if(a.age > b.age){
        return 1
    } else if(a.age < b.age){
        return -1
    } else{
        return 0
    }
})

console.log(sortobj)
