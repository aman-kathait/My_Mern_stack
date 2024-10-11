class Cat{
  constructor(name){
    this.name=name;
    this.legs=4;
  }
  move(){
    console.log(this.name+ " Walks on 4 legs");
  }
  speak(){
    console.log(this.name + " Make's noise");
  }
}
let simba=new Cat("Simba");

simba.speak();
simba.move();

class Lion extends Cat{
  speak(){
    console.log(`${this.name} Roars`);
    
  }
}
let timba=new Lion("Timba");
timba.speak();

class mathutils{
  static add(a,b){
    return a+b;
  }
}
console.log(mathutils.add(10,8));
