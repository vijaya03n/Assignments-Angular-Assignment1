const express = require('express');
const bodyParser= require('body-parser');
const cors= require('cors');

const port=3000;

const app=express();

app.use(bodyParser.json());
app.use(cors());


app.getProduct('/addList',function(req,res){
    res.send('hello');
})

app.postRestaurant('/addList',function(req,res){
    console.log(req.body);
    res.status(200).send({"message":"data received"});
})
app.listen(port, function(){
    console.log("server running on "+port);
});