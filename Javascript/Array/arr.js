// let arr=[1,2,3,4,5,6,7,8];
// console.log(arr);
let user={
  fname:"Ram",
  lname:"Sharma",
  age:30,
  hobbies:['music','sports'],
};
localStorage.setItem('userinfo',JSON.stringify(user));
let user1=JSON.parse(localStorage.getItem("userinfo"));
console.log(user1);

