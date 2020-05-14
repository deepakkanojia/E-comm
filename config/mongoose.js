// installing libraries
const mongoose = require('mongoose');
// making connections
mongoose.connect('mongodb://localhost:27017/products');
// same here 
const db = mongoose.connection;
// if in connection any error comes this is there
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// if success it will come
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;