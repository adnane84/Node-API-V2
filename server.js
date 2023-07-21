require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const errorMiddleware = require('./middleware/errorMiddleware')

// https://www.youtube.com/watch?v=v_pcW65DGu8   check the video again for access start from 35 minutes 


const app = express()
const PORT = process.env.PORT || 3000

const MONGO_URL = process.env.MONGO_URL




app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes


app.use('/api/products', productRoute)

app.get('/', (req, res) => {
  res.send('hello node first try')
})

app.get('/blog', (req, res) => {
  res.send('hello node second try')
})

app.use(errorMiddleware)

mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL)
.then(() => {
  console.log('connect to MongoDB')
  app.listen(PORT, () => {
    console.log(`Node API app is running on port ${PORT}`)
  });
}).catch((error) => {
  console.log(error);
})