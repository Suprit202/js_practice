// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Suprit"
tinderUser.isLoggedIn = false

//Object inside object
const regularUser = {
  email: "supritmhnt123@gamil.com",
  fullname: {
    firstName: "Suprit",
    lastName: "Mohanty"
  },
}

const obj1 = {
  1: "a",
  2: "b",
}

const obj2 = {
  3: "a",
  4: "b",
}

const obj3 = {
  5: "a",
  6: "b",
}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const user = [
  {
    id: 1,
    email:" h@gmail.com"
  },
  {
    id: 2,
    email:" s@gmail.com"
  },
  {
    id: 3,
    email:" p@gmail.com"
  },
]

// console.log(user[1].email) // s@gmail.com

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));       // ["id", "name", "isLoggedIn"]
// console.log(Object.values(tinderUser));    // ["123abc", "Suprit", false]
// console.log(Object.entries(tinderUser));  // [["id", "123abc"], ["name", "Suprit"], ["isLoggedIn", false]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true  


const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course   //hitesh (another way to access object)
// console.log(courseInstructor); 

// const {courseInstructor:instructor} = course   //hitesh (rename to instructor)
// console.log(instructor); 



// {  
//     "name": "hitesh",                                 //JSON object
//     "coursename": "js in hindi",
//     "price": "free"
// }

const navbar = ({company}) => {    //destructuring

}

navbar(company = " hitesh")  

[  //API can store in array with multiple objects
  {},
  {},
  {}
]