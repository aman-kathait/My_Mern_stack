class User {
  constructor(name,age,branch) {
    this.name=name;
    this.age=age;
    this.branch=branch;
  
  this.changebranch=function (){
    branch=prompt('Enter your branch');
    this.branch=branch;
  }
}
}
const user1=new User("Aman",20,"CSE");
const user2=new User("Ram",18,"IT");
console.log(user1);
console.log(user2);

user2.changebranch();
console.log(user2);

