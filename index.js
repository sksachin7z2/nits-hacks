const connectToMongo=require("./db");
var cors = require('cors')
const express = require('express')
connectToMongo();
require('dotenv').config()



const app = express()
const port =process.env.PORT|| 5000 ;
app.use(cors())
app.use(express.json());
//heroku
if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'))
}
//Available routes
app.use('/api/stuauth',require('./routes/studentauth'));
app.use('/api/mangauth',require('./routes/manageauth'));


app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`)
})