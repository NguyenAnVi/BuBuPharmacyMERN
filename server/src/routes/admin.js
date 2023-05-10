const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Middleware-here; Time:', Date.now())
  next()
})

router.get('/', (req, res) => {
  res.send('admin-'+req.method+i18n.__('greeting')+'!')
})

router.get('/products', (req, res) => {
  res.send('admin-'+req.method+'-productspage!')
})

module.exports = router