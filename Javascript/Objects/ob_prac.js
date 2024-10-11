let product={
  price:300,
  size:32,
  category:"Men",
  rating:{
    five_star:10,
    four_star:7,
    three_star:2,
    two_star:5,
    one_star:3,
  },
};

let obj1={
  a:1,b:{c:3},
};
let obj2={
  a:1,b:{c:3},
};
let obj3={
  a:1,b:{c:4},
};

function shallowcomp(obj1,obj2) {
  if (typeof obj1 !=='object' || obj1 ===null || typeof obj2!=='object' || obj2===null) {
    return false;
  }

  const keys1=Object.keys(obj1);
  const keys2=Object.keys(obj2);
  if (keys1.length!==keys2.length) {
    return false;
  }

  for (let key of keys1){
    if(obj1[key]!==obj2[key]){
      return false;
    }
  }
  return true;
}
//console.log(shallowcomp(obj1,obj3));

function deepcomp(obj1,obj2) {
  if (obj1===obj2) {
    return true;
  }
  if (typeof obj1 !=='object' || obj1 ===null || typeof obj2!=='object' || obj2===null) {
    return false;
  }

  const keys1=Object.keys(obj1);
  const keys2=Object.keys(obj2);
  if (keys1.length!==keys2.length) {
    return false;
  }

  for (let key of keys1){
    if(!keys2.includes(key) || !deepcomp(obj1[key],obj2[key])){
      return false;
    }
  }
  return true;
}
console.log(deepcomp(obj1,obj2));

