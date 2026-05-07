const express = require('express')
const app = express()

app.use('/',(req,res)=>{

res.send("hooi")
})
app.listen(5000,(req,res)=>{
    console.log("server successfully running at port 5000");
    
})