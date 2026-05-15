const mongoose = require('mongoose')

//db connection

const connectdb = async (req,res)=>{

try {

await mongoose.connect(process.env.MONGO_URI)
console.log("mongo connected");

} catch (error) {
    console.log(error);
    
}

}
connectdb()
module.exports = connectdb