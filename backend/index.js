require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const AuthUserRouter = require('./Routers/Userrouter');
const AuthDocRouter = require('./Routers/DoctorRoute');
const connectToDB = require('./Database/db');
const cors = require('cors');
connectToDB();
const app = express();
const PORT = process.env.PORT||5000;
app.use(cors()); 
app.use(express.json());
app.use('/api',AuthUserRouter);
app.use('/api',AuthDocRouter);


app.listen(PORT,()=>console.log('server running at port:',PORT));

// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');


// const AuthUserRouter = require('./Routers/Userrouter');
// const AuthDocRouter = require('./Routers/DoctorRoute');
// const connectToDB = require('./Database/db');

// connectToDB();
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors()); // allow all origins — adjust if needed
// app.use(express.json());

// app.use('/api', AuthUserRouter);
// app.use('/api', AuthDocRouter);

// app.listen(PORT, () => console.log('server running at port:', PORT));
