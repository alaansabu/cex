const mongoose = require('mongoose')

const Schema = mongoose.Schema

export const userSchema = new Schema({

    userName:{
        type:String,
        require:true
    },

    password:{
        type:Any, 
        require:true,

    },
    walletId:{
        type:Number,
        require:true

    }

})