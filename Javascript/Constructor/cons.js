function User(name,age,isadmin) {
  this.name=name;
  this.age=age;
  this.isadmin=isadmin;

  // this.makeadmin=function(){
  //   this.isadmin=true;
  // }
}
const user1=new User("Aman",20,false);
const user2=new User("Ajay",22,true);

console.log(user1);
console.log(user2);
//user1.makeadmin();
//console.log(user1);

User.prototype.makeadmin=function () {
  this.isadmin=true;
}

user1.makeadmin();
console.log(user1);




