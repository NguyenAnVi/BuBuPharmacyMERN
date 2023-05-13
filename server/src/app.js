const express = require('express')
const config = require('./config')
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv =  require("dotenv")
const path = require('path')
const session = require('express-session');
const MongoStore = require('connect-mongo');
const i18n = require('i18n-express')
const ApiError = require("./errors/api-error")
const cookieParser  = require('cookie-parser')
const bodyParser  = require('body-parser')

mongoose.connect(config.db.uri, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

dotenv.config()
//use sessions for tracking logins

const app = express()

app.set('view engine', 'pug');
app.set('views','./views');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(session({
  secret: config.session.secret,
  resave: true,
  saveUninitialized: false, // don't create session until something stored
  store: new MongoStore({
    mongoUrl: config.db.uri,
    ttl: 2 * 24 * 60 * 60, // Session expiration = 2 days.
    autoRemove: 'native', // Set MongoDB to clean expired sessions (default mode)
    collectionName:"sessions",
    touchAfter: 10 * 60 // time period in seconds = 10 minutes
  })
}));
app.use( i18n({
  translationsPath: path.join(__dirname, 'locales'), // <--- use here. Specify translations files path.
  siteLangs: ["en","vi"],
  textsVarName: 'translation'
}))

function isAuthenticated (req, res, next) {
  if (req.session.user) {
    console.log("req.session.user:"+req.session.user);
    next()
  }
  else {
    console.log("req.session.user:NULL");
    next('route')
  }
}

app.use(cors())
app.use(express.json())



const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/admin')

app.use('/', userRoutes)
app.use('/admin',isAuthenticated, adminRoutes)

// handle 404 response
app.use((req, res, next) => {
  // Code ở đây sẽ chạy khi không có route được định nghĩa nào
  // khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
  return next(new ApiError(404, "Resource not found"));
});
  

app.use((err, req, res, next) => {
  // Middleware xử lý lỗi tập trung.
  // Trong các đoạn code xử lý ở các route, gọi next(error)
  // sẽ chuyển về middleware xử lý lỗi này
  return res.status(err.statusCode || 500).json({
  message: err.message || "Internal Server Error",
  });
});

 module.exports = app