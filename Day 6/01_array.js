// array
const myArr = [1, 2, 3, 4, 5];
const myHero = ["saktiman","naagraj"];

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr[1]);  //2


// Array Method
// myArr.push(6)  // [ 1, 2, 3, 4, 5, 6 ]
// myArr.push(7)  // [ 1, 2, 3, 4, 5, 6, 7 ]
// myArr.pop()    // [ 1, 2, 3, 4, 5, 6 ]
// console.log(myArr);


// myArr.unshift(9)  // [ 9, 1, 2, 3, 4, 5 ]
// myArr.shift()    // [ 1, 2, 3, 4, 5 ]
// console.log(myArr);

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(3)); //false

// const newArr = myArr.join("   ") //1   2   3   4   5 (returns a string with addin space "   ")
// console.log(newArr);


//silce, splice
const myArr3 = myArr.slice(1, 3); // [ 2, 3 ]
console.log(myArr3); 

const myArr4 = myArr.splice(1, 3) // [ 2, 3, 4 ]
console.log(myArr4); 