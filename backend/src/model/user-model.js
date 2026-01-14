const mongoose =require("mongoose")
const userSchema = mongoose.Schema({
    name:String,
    userName:String,
    email:String,
    password:String,
    pendingInv:[{userName:String}],
    recieveInv:[{userName:String}],
    friends:[{
        userName:String
    }],
    teams:[{
        teamId:String,
        tasks:[{
            name:String,
            description:String,
            status:String
        }]
    }]


})
module.exports=mongoose.model("User",userSchema)