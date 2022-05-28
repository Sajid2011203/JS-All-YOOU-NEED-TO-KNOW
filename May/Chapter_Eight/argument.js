// function argument

function argument(){
    
    var sumFinal = 0
    for(var i = 0; i < arguments.length; i++){
        var sumOfArr = 0; //summation store hare some round
        for(var j = 0; j <arguments[i].length; j++) {
            sumOfArr += arguments[i][j]
            
        } // This loop for assign summation
        console.log(sum)

        sumFinal += sum
    }
    
    console.log(sumFinal)
}
var arr =[1, 2, 3, 4, 5, 6, 7, 8, 9]
var arr2 =[1, 2, 3, 4, 5, 6, 7, 8, 9]
var arr3 =[1, 2, 3, 4, 5, 6, 7, 8, 9]
argument(arr, arr2, arr3)

