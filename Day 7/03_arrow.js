const user = {
  username: "suprit",
  price: 999,
  welcomeMessage: function(){
    console.log(`Welcome ${this.username} to our website`);
    
  }
}

user.welcomeMessage() // Welcome suprit to our website
user.username = "sam"
user.welcomeMessage() // Welcome sam to our website


// const addTwo = (num1,num2) => {
//   return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))
