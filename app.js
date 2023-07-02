const express = require('express');
const api = require('./src/routes/api');
const helmet = require('helmet');
const cors = require('cors')
const path = require('path');
require('./src/db/conn')
const staticPath = path.join(__dirname, 'public')

const app = express();
app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.json());
app.use(express.static(staticPath))
app.use(helmet())

app.use('/api', api);


app.get('/', (req,res)=>{
    res.render('index')
})




module.exports = app;