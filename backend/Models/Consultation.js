const mongoose = require('mongoose');
const consultation = new mongoose.Schema({
    Patient:{
        type:String,
        ref:'User',
        required:[true,'please enter the patient name']
    },
    Doctor:{
        type:String,
        ref:'Doctor',
        required:[true,'please enter the doctor name']
    },
    speciality:{
        type:String,
        required:true
    },
    symptoms:{
        type:String,
        required:true,
    },
    scheduledat:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        enum:['scheduled','success','in-progress','cancelled'],
        default:'scheduled'
    },
    prescription:{
        type:String,
        required:[true,'enter a prescription']
    },
    information:{
        type:String
    }
})
const consult = mongoose.model('Consultation',consultation);
module.exports = consult;