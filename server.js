const express = require('express')
require('dotenv').config({path:'config.env'})

const PORT = process.env.PORT
const app = express()
const router = require('./routes/routes.js')

app.use(express.json())
app.set("view engine","ejs")
app.use(express.static("public"))
app.use('/',router)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})