const express = require('express')
const app = express()
const path = require('path')


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/babbage',(req,res) => {
    res.sendFile(path.join(__dirname, 'babbage.html'));
});

app.get('/berners-lee',(req,res) => {
    res.sendFile(path.join(__dirname, 'berners-lee.html'));
});

app.get('/clarke',(req,res) => {
    res.sendFile(path.join(__dirname, 'clarke.html'));
});

app.get('/hamilton',(req,res) => {
    res.sendFile(path.join(__dirname, 'hamilton.html'));
});

app.get('/hopper',(req,res) => {
    res.sendFile(path.join(__dirname, 'hopper.html'));
});

app.get('/lovelace',(req,res) => {
    res.sendFile(path.join(__dirname, 'lovelace.html'));
});

app.get('/turing',(req,res) => {
    res.sendFile(path.join(__dirname, 'turing.html'));
});


app.listen(3030,()=> console.log("servidor levantado")
);