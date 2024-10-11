
function greet() {
  console.log('Hello World!');
}
console.log(greet());

setTimeout(greet,2000);
console.log(10);

function printtime() {
  const now=new Date();
  console.log(`Current time: ${now.toLocaleTimeString()}`);
  
}
const intervalid=setInterval(printtime,1000);

setTimeout(() => {
  clearInterval(intervalid);
  console.log("Stopped!!");
},10000);