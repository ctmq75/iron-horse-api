module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: 'postgresql://dunder_mifflin@localhost/mailinglist',
    API_ENDPOINT: 'http://localhost:8000/api/mailinglist'
  }