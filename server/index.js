const express = require('express');
const app = express()
app.listen(5000, ()=>{
    console.log("running on : localhost:5000");
});

app.get('/',(req,res)=>{
    res.send("hello from server");
})