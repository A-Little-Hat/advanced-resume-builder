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
app.get('/test',async(req,res)=>{
    const user = await new User({
        name: "req.body.name",
        email:"req.body.email",
        password: "req.body.password"
    }).save();
    res.status(200).json(user);
});



app.listen(5000, ()=>{
    console.log("running on : localhost:5000");
});

app.get('/',(req,res)=>{
    res.send("hello from server");
})