require('dotenv').config()

const express = require('express')
const cors = require('cors')
const db = require('./DB/connection')

const router = require('./Routes/router')

const bgServer = express()

bgServer.use(cors())
bgServer.use(express.json())
bgServer.use(router)

const PORT = 5000 || process.env.PORT

bgServer.listen(PORT,()=>{
    console.log("listening on port" + PORT);
})

bgServer.get('/',(req,res)=>{
    res.send(`<h1>Blog Server Started</h1>`)
})