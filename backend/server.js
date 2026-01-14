const express = require('express');
const cors= require("cors")
const dotenv = require("dotenv");
const connectDB = require('./src/config/database');
const user_router = require('./src/router/user-router');

const app = express();


// Middleware to parse JSON requests
app.use(express.json());
app.use(cors())
dotenv.config()
connectDB()
app.use("/api", user_router)
const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`server is runnig on port (${port})`)
})