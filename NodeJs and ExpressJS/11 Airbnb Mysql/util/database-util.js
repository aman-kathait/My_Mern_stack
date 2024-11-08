const mysql=require('mysql2');

const pool=mysql.createPool({
  host:'localhost',
  user:'root',
  password:'amankathait@13',
  database:'airbnb'
});
module.exports=pool.promise();