require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const AuthUserRouter = require('./Routers/Userrouter');
const AuthDocRouter = require('./Routers/DoctorRoute');
const ConsultRouter = require('./Routers/Consulation');
const GroqRouter = require('./Routers/groqRoutes');


const connectToDB = require('./Database/db');
const cors = require('cors');
connectToDB();
const app = express();
const PORT = process.env.PORT||5000;
app.use(cors()); 
app.use(express.json());
app.use('/api',AuthUserRouter);
app.use('/api',AuthDocRouter);
app.use('/api',ConsultRouter);
app.use('/api',GroqRouter)


app.listen(PORT,()=>console.log('server running at port:',PORT));
