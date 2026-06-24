require('dotenv').config()
const Product = require( './models/Product')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('MongoDB is c o n n e c t e d!'))
    .catch((err)=> console.log(err))
    
    


app.use(cors())
app.use(express.json())
app.get('/products', async (req, res)=>{
    try {
        const result = await Product.find()
        res.json(result)
    } catch (err) {
        console.log(err)
    }
})

app.get('/products/:id', async (req, res)=>{
    try {
        const result = await Product.findById(req.params.id)
        res.json(result)
    } catch (err) {
        console.log(err)
    }
})


app.listen(5001,()=>{
    console.log("backend is working!");
    
})