const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fullStack').then(()=>{
    console.log('Database Connection Success')
}).catch((e)=>{
    console.log('Database Connection Error', e)
})
