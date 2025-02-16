function addTwoNumbers(number1,number2) {
  console.log(number1 + number2);
}
// addTwoNumbers(2,3) // 5
// addTwoNumbers(5,null) // 5
// addTwoNumbers(5,undefined) // NaN
// addTwoNumbers(5,"") // 5



function addTwoNumbers(number1,number2) {
  return number1 + number2;
}

let result = addTwoNumbers(2,3) 
// console.log(result); // 5




function loginUsername(username) {
  if (!username) //username === null
  {
    return "Please enter a username"
  }
  
  return `Welcome ${username}` 
}

// console.log(loginUsername("Suprit"));   // Welcome Suprit
console.log(loginUsername());   // Welcome Suprit



function calculateCartPrice(...num1) {
  return num1
}
console.log(calculateCartPrice(1,2,3,4,5,6,7,8,9,10)) // [1,2,3,4,5,6,7,8,9,10]




const user = {
  username: "suprit",
  price: 199
}

function handelObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handelObject(user) // Username is suprit and price is 199

handelObject({
  username: "sam",
  price: 399
})



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));