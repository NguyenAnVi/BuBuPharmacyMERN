const ApiError = require("../errors/api-error")
const User = require("../models/user");


exports.home = (req, res) => {
  res.send({ message: "hello"})
}

exports.registerview = (req, res, next) => {
  res.send({ message:"register page"})
}

exports.register = async (req, res, next) => {
  if(!req.body?.phone) {
    return next(new ApiError(400, "phone cannot be empty"))
  }

  try {
    const {name, phone, password, email} = req.body
    const user = new User({
      name:name,
      phone:phone,
      password:password,
      email:email
    })
    await user.save()
    return res.send(user)
  } catch (error) {
    return next(new ApiError(500, "An error occurred while register: "+ error))
  }
}