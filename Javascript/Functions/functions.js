let sum=function(n1,n2) {
  return n1+n2;
}
let sum1=(n1,n2)=>{
  return n1+n2;
}
let square=num=>num*num;
console.log(sum(10,20));
console.log(sum1(10,10));
console.log(square(8));

const num=[1,2,3,4,5,6];
function square1(num) {
  return num*num;
}
//const sq=num.map(square1)
const sq1=num.map((num)=>num*num);
console.log(sq1);

function createadder(x) {
  return function (y) {
    return x+y;
  }
}
//const add=createadder(5);
//console.log(add);

//console.log(createadder(10)(10));

//closures

function outer() {
  let outvariable="I am outside!";
  function inner() {
    console.log(outvariable);
  }
  return inner;
}
//const closure=outer();
//console.log(outer()());

function makecounter() {
  let count=0;
  return function(){
    ++count;
    return count;
  };
}
const counter=makecounter();
console.log(counter());
console.log(counter());
console.log(counter());

console.log(makecounter()());
console.log(makecounter()());
console.log(makecounter()());

