const mongoose = require('mongoose');
const validator = require('validator');
const user = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter the name']
    },
    email:{
        type:String,
        required:[true,'please enter the gmail'],
        validator:[validator.isEmail,'please enter the valid email address']
    },
    phone_no:{
        type:Number,
        required:[true,'please enter the phoneno'],
        minlength:10,
        maxlength:10
    },
    password:{
        type:String,
        required:[true,'please enter the password'],
        minlength:8,
        select:false
    },
    confirmPassword:{
        type:String,
        required:[true,'please confirm the password to proceed'],
        select:false,
        validate:{
            validator:function(value) {
                return value === this.password;
            },
            message:'password and confirm password does not match'
        }
    }
});
const userSchema = mongoose.model('User',user);
module.exports = userSchema;