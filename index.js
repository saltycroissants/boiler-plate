const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
mongoose.connect( 'mongodb+srv://enji8:ji970522@cluster0.ushab.mongodb.net/<dbname>?retryWrites=true&w=majority'
  ,{ useNewUrlParser:true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
  }).then(() => console.log("MongoDB success"))
    .catch(() => console.log("error"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})