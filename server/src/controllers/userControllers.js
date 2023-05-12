const ApiError = require("../errors/api-error")
const User = require("../models/user");


exports.home = (req, res) => {
  if(req.session.user){
    res.render('home',{
      name:req.session.user.name
    })
  } else {
    res.render('home')
  }
}

exports.registerview = (req, res) => {
  // res.send({ message:"register page"})
  res.render('register');
}

exports.register = async (req, res, next) => {
  if (!req.body?.phone || !req.body?.name || !req.body?.password) {
    return next(new ApiError(400, "cannot be empty:" + req.body.name))
  } else {
    try {
      // Find the phone
      User.findOne({
        phone: req.body.phone
      }).then (async (err, result)=>{
        // if the phone doesn't exists:
        if(!err){
          const user = new User({
            name: req.body.name,
            phone: req.body.phone,
            password: req.body.password,
            email: req.body?.email
          })
          await user.save()
          req.session.user = user;
          res.redirect('/home');
        }
        // if the phone does exist:
        else{
          res.render('register', {
            message: "User Already Exists! Login or choose another phone"
          });
        }
      })
    } catch (error) {
      return next(new ApiError(500, "An error occurred while register: " + error))
    }
  }
}

exports.loginview = (req, res) => {
  if(!req.session.user)
    res.render('login');
  else res.redirect('/home')
}

exports.login = async (req, res) => {

  // regenerate the session, which is good practice to help
  // guard against forms of session fixation
  req.session.regenerate(function (err) {
    if (err) next(err)
     // store user information in session, typically a user id
     req.session.user = req.body.user

     // save the session before redirection to ensure page
     // load does not happen before session is saved
    //  req.session.save(function (err) {
    //    if (err) return next(err)
    //    res.redirect('/')
    //  })
    })

   if(!req.body.phone || !req.body.password){
      res.render('login', {message: "Please enter both phone and password"});
   } else {
      // Find the account
      User.findOne({
        $and:[
          {phone: {$eq:req.body.phone}},
          {password: {$eq:req.body.password}}
        ]
      }).then (async (result)=>{
        // if the account doesn't match:
        if(!result){
          res.render('login', {
            message:"Invalid credentials!"
          });
        }
        // if the account does match:
        else{
          req.session.user = result;
          res.redirect('/home');
        }
      })
   }
}
exports.logout = (req, res) => {
  req.session.destroy(function(){
    console.log("an user has logged out.")
 });
 res.redirect('/home');
}
