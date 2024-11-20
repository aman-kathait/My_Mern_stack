const {check, validationResult} = require('express-validator');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {pageTitle: 'Login' ,isLoggedIn:false});
}

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {pageTitle: 'Signup' ,isLoggedIn:false});
}

exports.postLogin=(req,res,next)=>{
  req.session.isLoggedIn=true;
  res.redirect("/");
}

const firstNameValidator=
check('firstName')
  .notEmpty()
  .withMessage('First Name is required')
  .trim()
  .isLength({min:2})
  .withMessage('First Name should be atleast 2 characters long')
  .matches(/^[A-Za-z\s]+$/)
  .withMessage('First Name should contain only alphabets');

exports.postSignup=[
 firstNameValidator,
  (req,res,next)=>{
    console.log('Came here to sign Up',req.body);
    const errors=validationResult(req);
    console.log(errors.array());
    if(!errors.isEmpty()){
      return res.status(422).render('auth/signup',{
        pageTitle:'Signup',
        isLoggedIn:false,
        errorMessage:errors.array().map(err=>err.msg),
      });
    }

    res.redirect("/login");
  }
];
exports.postLogout=(req,res,next)=>{
  req.session.destroy();
  res.redirect("/login");
}