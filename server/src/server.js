const config = require('./config')
const app = require('./app')

const port = config.app.port
const origin = config.app.origin

app.listen(port, origin, () => {
  console.log(`Server running on port ${port}`)
  console.log(`http://127.0.0.1:${port}`)
})

