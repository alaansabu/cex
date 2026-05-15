const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const connectdb = require('./config/dbConnect')

app.use('/',(req,res)=>{

res.send("hooi")
})
app.listen(5000,(req,res)=>{
    console.log("server successfully running at port 5000");
    
})