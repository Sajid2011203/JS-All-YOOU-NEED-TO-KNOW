function curring(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

var a = curring(10)(10)

console.log(a)