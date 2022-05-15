// When a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope

// function test() {
//     var closure = 'I am a closure'

//     function log() {
//         console.log(closure)
//     }

//     log()
// }

// test()

// Problem Solving

for (var i = 0; i <= 5; i++){
    (function (n) {
        setTimeout(function () {
            console.log(n)
        }, 1000 * n)
    })(i)
}