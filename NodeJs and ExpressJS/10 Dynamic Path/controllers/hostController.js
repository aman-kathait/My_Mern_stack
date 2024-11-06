const Home = require('./../models/Home');

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {pageTitle: 'Host Your Home'});
};

exports.getEditHome = (req, res, next) => {
  const homeId=req.params.homeId;
  const editing=req.query.editing==='true';
  if (!editing){
    console.log("Editing flag not set properly");
    return res.redirect("/host/host-homes");
  }
  Home.findById(homeId,home=>{
    if (!home) {
      console.log("Home not found for editing");
      return res.redirect("/host/host-homes");
    }
    console.log(homeId,editing,home);
    res.render("host/edit-home", {pageTitle: 'Edit Your Home'});
  })
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll(registeredHomes => {
    res.render("host/host-homes", { homes: registeredHomes, pageTitle: "Tumahara airbnb" });
  });
};

exports.postAddHome = (req, res, next) => {
  const {houseName, price, location, rating, photoUrl} = req.body;
  const newHome = new Home(houseName, price, location, rating, photoUrl);

  newHome.save(error => {
    if (error) {
      res.redirect('/');
    } else {
      res.render("host/home-added", {pageTitle: 'Home Hosted'});
    }
  });
}