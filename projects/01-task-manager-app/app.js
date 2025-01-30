const express = require('express');
const connectToDB = require('./db/connect');
const route = require('./routes/taskRoutes');
const app = express();
require('dotenv').config();

app.use(express.json());

app.use('/', route);

app.get('/tests', (req, res)=>{
    res.json({
        msg:`Task manager App`
    })
})

const port = process.env.PORT || 5000

const start = async ()=>{
    try {
        await connectToDB(process.env.MONGO_URL);
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}...`)
        })   
    } catch (error) {
        console.log(error);
    }
}

start();