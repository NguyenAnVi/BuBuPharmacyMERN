const express = require('express');
const controller = require('../controllers/userControllers')
const router = express.Router();

router.route(['/', '/home'])
  .get(controller.home)

router.route('/register')
  .get(controller.registerview)
  .post(controller.register)
router.route('/login')
  .get(controller.loginview)
  .post(controller.login)
router.route('/logout')
  .get(controller.logout)
  .post(controller.logout)
  
module.exports = router