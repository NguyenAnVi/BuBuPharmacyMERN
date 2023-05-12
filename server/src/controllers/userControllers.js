const ApiError = require("../errors/api-error")
const User = require("../models/user");


exports.home = (req, res) => {
  res.send({ message: "hello" })
}

exports.registerview = (req, res, next) => {
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
          res.render('register', {
            message: "Register complete"
          });
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