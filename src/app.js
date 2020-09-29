require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const memberService = require('./MemberService.js')
const jsonBodyParser = express.json()


const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())



app.get('/api', (req, res) => {
    res.send('Hello, world!')
})

app.post('/api/mailinglist', jsonBodyParser, (req, res, next) => {
  const { full_name, email } = req.body
  const newUser = { full_name, email }
  console.log(newUser)
  return memberService.insertMember(
    req.app.get('db'),
    newUser
  )

  res
  .send('You have syccessfully been added to the mailing list!');
});

 app.use(function errorHandler(error, req, res, next) {
       let response
       if (NODE_ENV === 'production') {
         response = { error: { message: 'server error' } }
       } else {
         console.error(error)
         response = { message: error.message, error }
       }
       res.status(500).json(response)
     })


module.exports = app