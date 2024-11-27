const {check} = require('express-validator');
exports.firstNameValidation=check('firstName')
  .notEmpty()
  .withMessage('First Name is required')
  .trim()
  .isLength({min:2})
  .withMessage('First Name should be atleast 2 characters long')
  .matches(/^[A-Za-z\s]+$/)
  .withMessage('First Name should contain only alphabets');

  exports.lastNameValidation=check('lastName')
  .trim()
  .matches(/^[A-Za-z\s]*$/)
  .withMessage('Last Name should contain only alphabets');

  exports.emailValidation=check('email')
  .isEmail()
  .withMessage('Please enter a valid email')
  .normalizeEmail();

  exports.passwordValidation=check('password')
  .trim()
  .isLength({min:8})
  .withMessage('Password should be atleast 8 characters long')
  .matches(/[a-z]/)
  .withMessage('Password should contain atleast one lowercase letter')
  .matches(/[A-Z]/)
  .withMessage('Password should contain atleast one uppercase letter')
  .matches(/[!@#$%^*":?]/)
  .withMessage('Password should contain atleast one special character');

  exports.confirmPasswordValidation=check('confirm_password')
  .trim()
  .custom((value,{req})=>{
    if(value!==req.body.password){
      throw new Error('Passwords do not match');
    }
    return true;
  });

  exports.userTypeValidation=check('userType')
  .trim()
  .notEmpty()
  .withMessage('User Type is required')
  .isIn(['guest','host'])
  .withMessage('User type is invalid');

  exports.termsValidation=check('termsAccepted')
  .notEmpty()
  .withMessage('Terms and Conditions should be accepted');

  