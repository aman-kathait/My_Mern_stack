// async function myfunction() {
//   return 'Hello';
// }
// let str=myfunction();
// console.log(str);
// str.then(data=>{
//   console.log(data);
// });

async function getusers() {
  console.log('INSIDE USERS');
  let response=await fetch ('https://jsonplaceholder.typicode.com/users');
  let json= await response.json();
  console.log(json);
}
getusers();
