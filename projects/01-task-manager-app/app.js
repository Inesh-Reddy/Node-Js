const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res)=>{
    res.json({
        msg:`Task manager App`
    })
})

const port = process.env.PORT || 5000

const start = ()=>{
    app.listen(port, ()=>{
        console.log(`Server is listening on port ${port}...`)
    })
}

start();