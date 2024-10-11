// console.log('Checking callback hell');

// function getdatafromInternet(successCallback) {
//   console.log('Getting data from internet');
//   setTimeout(() => {
//     console.log('Got data from internet');
//     successCallback();
//   }, 8000);
//   console.log('Data Fetch is set');
// }

// getdatafromInternet(()=>{
//   console.log('Data is fetched');
// });

//promise creation

function getdatafromInternet() {
  let promise=new Promise((resolve,reject)=>{
    console.log('Getting data from internet');
    for (let i = 0; i < 1000; i++) {
      console.log(i);
    }
    resolve('KG CODING');
    //reject('Internet Timeout ')
  }); 
  return promise;
}
getdatafromInternet().then((data)=>{
  console.log('Data is Fetched '+data);
})
.catch((data)=>{
  console.log('Error occured '+data);
})
.finally((data)=>{
  console.log('Finally Block');
});