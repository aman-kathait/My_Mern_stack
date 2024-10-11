// let clickhandler=()=>{
//   console.log('button clicked');
// }
// let clickhandler1=()=>{
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }
// let button=document.getElementById("mybtn");
// button.onclick=clickhandler;
// button.onclick=clickhandler1;

//using event listner

// button.addEventListener('click',clickhandler);
// button.addEventListener('click',clickhandler1);

const outer=document.querySelector(".outer");
const inner=document.querySelector(".mybtn");

outer.addEventListener('click',()=>{
  console.log('outer');
},true);//true for executin outer function first
inner.addEventListener('click',()=>{
  console.log('inner');
});