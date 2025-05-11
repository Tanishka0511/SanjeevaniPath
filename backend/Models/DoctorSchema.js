const mongoose = require('mongoose');
const validator = require('validator');
const doctor = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter the name']
    },
    qualification:{
        type:String,
        required:[true,'please enter the degree information']
    },
    email:{
        type:String,
        required:[true,'please enter the email address'],
        validate:[validator.isEmail,'please enter a valid email']
    },
    speciality:{
        type:String,
        required:[true,'please enter the speciality']
    },
    password:{
        type:String,
        required:[true,'please set a password to continue'],
        minlength:8,
        select:false
    },
   
})
const DocSchema = mongoose.model('Doctor',doctor);
module.exports = DocSchema;