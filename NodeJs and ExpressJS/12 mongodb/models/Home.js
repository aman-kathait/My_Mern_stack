const {getDb}=require("../util/database-util");
const { ObjectId } = require("mongodb");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl,description,_id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description=description;
    if (_id) {
      this._id=new ObjectId(String(_id));
    }
  }

  save() {
    const db=getDb();
    if (this._id) {
      return db.collection("homes").updateOne({_id:this._id},{$set:this});
    }else{
    return db.collection("homes").insertOne(this);
    }
  }
 

  static fetchAll() {
    const db=getDb();
    return db.collection('homes').find().toArray()
  }

  static findById(homeId) {
   const db=getDb();
   return db.collection('homes').find({_id:new ObjectId(String(homeId))}).next()
  }
  static deleteById(homeId) {
  const db=getDb();
  return db.collection('homes').deleteOne({_id: new ObjectId(String(homeId))});
  }

  // .then(home=>{
  //   console.log(home);
  //   return home;
  //  })
  //  .catch(err=>{
  //   console.log('Error came while doing findById',err);
  //  })
}