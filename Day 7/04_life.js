// Immediately Invoked Function Expressions (IIFE)
(function chai() {
  console.log(`DB CONNECTED!`);
})();    // DB CONNECTED!


//      ()/*fuction defination*/ ()/*Immidiate function call*/
((name) => {
  console.log(`Welcome ${name}`);
})("suprit")            // Welcome suprit