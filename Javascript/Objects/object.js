console.log("Learning Objects")
let user={
  name:"Aman",
  age:40,
  subjects:{
    cse:80,
    toc:77,
    dsa:99,
  },
  displayage: function(){
    return `${this.age.toFixed(21)}`;
  }
}
function tryswap(obj){
  let temp=obj.a;
  obj.a=obj.b;
  obj.b=temp;
}
function main() {
  let obj={a:10,b:20};
  console.log(`Before swap- a:${obj.a}, b:${obj.b}`);
  tryswap(obj);
  console.log(`After swap- a:${obj.a}, b:${obj.b}`);  
}
main();