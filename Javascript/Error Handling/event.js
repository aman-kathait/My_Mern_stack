let parseStringToJson=(jsonString)=>{
  return JSON.parse(jsonString);
}

let obj;
try{
  obj=parseStringToJson('{"a":1}');
}catch (error){
  console.log('Error occured');
  console.log(error);
}


function divide(a,b) {
  if (b===0) {
    throw new Error('Divide by 0');
  }
  return a/b;
}
console.log(divide(10,5));
console.log(divide(5,10));
try {
  console.log(divide(5,5));
  console.log('Try block');
  
} catch (error) {
  console.log('Catch Block');
  //console.log('Error occured'); 
} finally {
  console.log('This will always execute');
  
}




