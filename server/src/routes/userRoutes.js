const express = require('express');
const controller = require('../controllers/userControllers')
const router = express.Router();

router.route('/')
  .get(controller.home)

router.route('/register')
  .get(controller.registerview)
  .post(controller.register)
  
module.exports = router