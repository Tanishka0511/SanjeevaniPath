require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = 9556;
const app = express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('connected to the database'))
.catch((err)=>console.log('error connecting to the database: ',err));
app.listen(PORT,()=>console.log('server running at port: ',PORT));