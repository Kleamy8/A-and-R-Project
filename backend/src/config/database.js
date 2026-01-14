const mongoose = require("mongoose")

const connectDB =async()=>{
    try{
        mongoose.connect(process.env.MONGODB)
        console.log("Mongo connected")
    }
    catch(error){
        console.log("error: "+ error)
    }
}
module.exports =connectDB