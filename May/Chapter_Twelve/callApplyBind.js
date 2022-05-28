// function add(c, d) {
//     console.log(this.a + this.b + c + d)
// }

// add.call({a: 10, b:20}, 10, 10)
// add.apply({a: 10, b:20}, [10, 10])
// var testBind = add.bind({ a: 10, b: 20 })

// testBind(10, 10)

// function sqrt(a, b) {
//     return this.a * this.b + a + b
// }

// var store = sqrt(5, 5)
// console.log(store);

// var tesCall = sqrt.call({ a: 5, b: 5 }, 5, 5)
// console.log(tesCall)

// var testApply = sqrt.apply({ a: 10, b: 10 }, [5, 5])

// console.log(testApply);

// var obj = {
//     a: 30,
//     b: 10
// }

// var testBind = sqrt.bind(obj)
// console.log(testBind(5, 5))


// function Laptop(ram, storage) {
//     var dec = 'Model: ' + this.name + ' Processor: ' + this.processor + ' Ram: ' + ram + ' Storage: ' + storage
//     console.log(dec);
// }

// Laptop.call({name: 'HP EliteBook 840 G3', processor: 'Intel Core I5 6300u'}, '8 GB DDR4', '256 SSD')
// Laptop.apply({name: 'HP EliteBook 840 G3', processor: 'Intel Core I5 6300u'}, ['8 GB DDR4', '256 SSD'])
// var testBind = Laptop.bind({ name: 'HP EliteBook 840 G3', processor: 'Intel Core I5 6300u' })

// testBind('8 GB DDR4', '256 SSD')