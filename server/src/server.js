const app = require('./app')
const mongoose = require('mongoose');
const config = require('./config')

mongoose.connect(config.db.uri, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

const port = config.app.port
const origin = config.app.origin

app.listen(port, origin, () => {
  console.log(`Server running on port ${port}`)
})

