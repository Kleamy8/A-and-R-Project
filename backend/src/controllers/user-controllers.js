const User = require("../model/user-model")
const bcrypt = require("bcrypt")

async function register(req,res){
    try{
        const {name,userName,email,password}= req.body
        const existingEmail = await User.findOne({email})
        const existingUserName = await User.findOne({userName})
        if(existingEmail){
         return   res.status(409).json({message:"Email already exist"})
        }
        if(existingUserName){
              return   res.status(409).json({message:"Username already exist, choose a diffrent one"})
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const user = new User({name,email,password:hashedPassword,userName})
        await user.save()
        res.status(201).json({message:"Account created",user})
    }
    catch(error){
        res.status(500).json({message:"Server error"})
        console.error(error)
    }
}
async function login(req,res){
    try{
        const {userName,password}=req.body
            const user = await User.findOne({userName})
            if(!user){
                return res.status(409).json({message:"Incorrect username"})
            }
            const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch){
                return res.status(404).json({message:"Incorrect password"})
            }
            res.status(200).json({user:user})

    }
      catch(error){
        res.status(500).json({message:"Server error"})
        console.error(error)
    }
    
}
async function getUser(req,res) {
    try{
        const {id}= req.params
        const user = await User.findById(id)
        if(!user){
            return res.status(403).json({message:"User not found"})
        }
        res.status(200).json({user:user})

    } catch(error){
        res.status(500).json({message:"Server error"})
        console.error(error)
    }
}


module.exports={register,login,getUser}
