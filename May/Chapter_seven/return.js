// return statment output dey function theke log output dite pare na

function person(firsName, lastName, gender) {
  if (gender === "male") {
    return "Mr. " + firsName + " " + lastName
  } else if (gender === "female") {
    var output = "Mrs. " + firsName + lastName

    return output
  }
}

var result = person("HM", "Nayem", "male")
console.log(result)

function add(a, b) {
  function sum() {
   return a + b
  }
  function sub() {
   return a - b
  }
  function multiply() {
    return a * b
  }
  function devide() {
    return a / b
  }

  return sum() + sub() + multiply() + devide()
}

var output = add(10, 5)
console.log(output);
