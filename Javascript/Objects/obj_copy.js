let obj={
  a:45,
  b:65,
  c:"Hello",
  d:{
    e:"World"
  },
}

console.log('Obj: ',obj);
let objcopy=copymyobject(obj);
console.log('Objcopy: ',objcopy);

objcopy.a=100;
objcopy.d.e="WORLD";
console.log('Obj: ',obj);
console.log('Objcopy: ',objcopy);


function copymyobject() {
  // let obj2=obj;
  // return obj2;

  let objstring=JSON.stringify(obj);
  let obj2=JSON.parse(objstring);
  return obj2;
}
