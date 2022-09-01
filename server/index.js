const express = require('express');
const app = express()
const mongoose = require('mongoose');
const routes = require('./routes/routes');
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

app.use('/api', routes);

routes.get('/test', async(req, res) => {
    console.log(req.body);
    // console.log(name, email, password);
    // const user = await new User({
    //     name,
    //     email,
    //     password
    // }).save();
    res.status(200).send("Hello World");
})

// app.get('/test',async(req,res)=>{
//     const user = await new User({
//         name: "req.body.name",
//         email:"req.body.email",
//         password: "req.body.password"
//     }).save();
//     res.status(200).json(user);
// });



app.listen(5000, ()=>{
    console.log("running on : localhost:5000");
});

app.get('/',(req,res)=>{
    res.send("hello from server");
})