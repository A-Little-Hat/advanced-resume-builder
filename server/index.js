const express = require('express');
const app = express()
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./Models/User')

mongoose.connect(process.env.MONGO_URL);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})



app.listen(5000, ()=>{
    console.log("running on : localhost:5000");
});

app.get('/',(req,res)=>{
    res.send("hello from server");
})