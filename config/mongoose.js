
// require the library
const mongoose = require('mongoose');

// mongoose connection
// search mongoose
// connect to the database
mongoose.connect('mongodb://localhost:27017/contact_lists_db');

// Acquire the connection (to check if it is sucessfull)

const db = mongoose.connection;

// error
db.on('error' ,console.error.bind(console,'error connecting to db'));

// up and running then print the message 

db.once('open' ,function(){
    console.log('Sucessfully connected to the database');
})