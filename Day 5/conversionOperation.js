let score = "suprit"
console.log(typeof score) // string;

let valueInNumber = Number(score)
console.log(valueInNumber) // NaN

// 33 => "33"
// 33abc => NaN
// true => 1
// false => 0

let value = "abc33"
console.log(value) // abc33

let isLoggedIn = "history"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true

let str1 = "hello"
let str2 = "world"
let str3 = str1 + str2
console.log(str3) // helloworld

let num1, num2, num3
num1 = num2 = num3 = 4+4
console.log(num1, num2, num3) // 8 8 8;

let gameCount = 0
++gameCount;
console.log(gameCount) // 1
