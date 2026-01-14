const express = require("express")
const { register, login, getUser } = require("../controllers/user-controllers")
const user_router= express.Router()

user_router.post("/",register)
user_router.post("/login",login)
user_router.get("/:id",getUser)

module.exports=user_router