// singleton
// Object.create

// object literals


const mySym = Symbol("key1")

const JsUser = {
  name: "Suprit",
  age: 22,
  "full name": "Suprit Mohanty",
  [mySym]: "value",
  location: "Kolkata",
  email: "supritmhnt123@gmail.com",
  inLoggedIn: true,
  lastLogin: ["monday", "tuesday"]
}


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());