const express = require('express');
const api = require('./src/routes/api');
const helmet = require('helmet')

const app = express();
app.use(express.json());
app.use(helmet())
app.use('/api', api);


app.get('/', (req,res)=>{
    res.send('This is Just an API')
})




module.exports = app;