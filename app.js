const express = require('express')
const app = express()

app.get('/',(req,res) => res.send('dadada'))

app.listen(3030,()=> console.log("servidor levantado")
);