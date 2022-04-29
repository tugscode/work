const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PhoneSchema = new Schema({
    image:{
        type: String
    },
    title:{
        type: String
    },
    discription:{
        type: String,
    },
    price:{
        type: Number
    },
    status:{
        type: Boolean
    }
})

const Phone = mongoose.model("phone", PhoneSchema)

module.exports = Phone