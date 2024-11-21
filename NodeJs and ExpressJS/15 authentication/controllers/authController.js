const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const bcrypt=require('bcryptjs');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {pageTitle: 'Login' ,isLoggedIn:false});
}

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {pageTitle: 'Signup' ,isLoggedIn:false});
}

exports.postLogin=async (req,res,next)=>{
  const {email,password}=req.body;
  try {
    const user= await User.findOne({email});
    if (!user) {
      throw new Error('User not found');
    }
    const isMatch= await bcrypt.compare(password,user.password);
    if (!isMatch) {
      throw new Error('Invalid password');
    }
    req.session.isLoggedIn=true;
    req.session.user=user;
    res.redirect("/");

  } catch(err){
    res.render('auth/login', {
      pageTitle:'Login',
      isLoggedIn:false,
      errorMessages:[err.message],
    }
    );
  }
  
}


exports.postSignup=[
  check('firstName')
  .notEmpty()
  .withMessage('First Name is required')
  .trim()
  .isLength({min:2})
  .withMessage('First Name should be atleast 2 characters long')
  .matches(/^[A-Za-z\s]+$/)
  .withMessage('First Name should contain only alphabets'),

  check('lastName')
  .trim()
  .matches(/^[A-Za-z\s]*$/)
  .withMessage('Last Name should contain only alphabets'),

  check('email')
  .isEmail()
  .withMessage('Please enter a valid email')
  .normalizeEmail(),

  check('password')
  .trim()
  .isLength({min:8})
  .withMessage('Password should be atleast 8 characters long')
  .matches(/[a-z]/)
  .withMessage('Password should contain atleast one lowercase letter')
  .matches(/[A-Z]/)
  .withMessage('Password should contain atleast one uppercase letter')
  .matches(/[!@#$%^*":?]/)
  .withMessage('Password should contain atleast one special character'),

  check('confirm_password')
  .trim()
  .custom((value,{req})=>{
    if(value!==req.body.password){
      throw new Error('Passwords do not match');
    }
    return true;
  }),

  check('userType')
  .trim()
  .notEmpty()
  .withMessage('User Type is required')
  .isIn(['guest','host'])
  .withMessage('User type is invalid'),

  check('termsAccepted')
  .notEmpty()
  .withMessage('Terms and Conditions should be accepted'),

  (req,res,next)=>{
    console.log('Came here to sign Up',req.body);
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).render('auth/signup',{
        pageTitle:'Signup',
        isLoggedIn:false,
        errorMessages:errors.array().map(err=>err.msg),
        oldInput:req.body,
      })
    }
    const {firstName,lastName,email,password,userType}=req.body;
    bcrypt.hash(password,12).then(hashedPassword=>{
      console.log(hashedPassword);
      
      const user=new User({firstName,lastName,email,password:hashedPassword,userType});
      user.save().then(result=>{
        res.redirect("/login");
      }).catch(error=>{
        return res.status(422).render('auth/signup',
          {
          pageTitle:'Signup',
          isLoggedIn:false,
          errorMessages:errors.array().map(err=>err.msg),
          oldInput:req.body,
          })
    })
    })
    
  }
];
exports.postLogout=(req,res,next)=>{
  req.session.destroy();
  res.redirect("/login");
}