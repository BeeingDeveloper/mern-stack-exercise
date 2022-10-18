const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;



// ---------------------------------------------------------------
//SETUP MIDDLEWARE:
app.use(cors());
app.use(express.json());
// ---------------------------------------------------------------




// ---------------------------------------------------------------
//MONGOOSE CONNECT:
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, 
    {useNewUrlParser: true, useUnifiedTopology:true,}
);
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("Mongodb connection established successfully...");
})
// ---------------------------------------------------------------




// ACCESS FILES--------------------------------------------------

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);
// ---------------------------------------------------------------





//START SERVER:
app.listen(port, ()=>{
    console.log(`Server running at port: ${port}`);
})
// ---------------------------------------------------------------
