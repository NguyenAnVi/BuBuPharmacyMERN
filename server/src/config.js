const config = {
  app: {
    port: process.env.PORT || 3001,
  },
  origin: ['localhost', '127.0.0.1'],
  db: {
    uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/bubupharmacy"
  },
  session: {
    secret: process.env.SESSION_SECRET_KEY
  }
};
module.exports = config;