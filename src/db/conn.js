const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/candidateDB').then(()=>{
    console.log('Database Connection Success')
}).catch((e)=>{
    console.log('Database Connection Error', e)
})
