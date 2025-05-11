const mongoose = require('mongoose');
const consultation = new mongoose.Schema({
    Patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,'please enter the patient name']
    },
    Doctor:{
        type:mongoose.Schema.Types.ObjectId,
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
    status:{
        type:String,
        enum:['scheduled','success','in-progress','cancelled'],
        default:'scheduled'
    },
    videoSessionLink:{
        type:String,
        default:'',
        select:false
    },
    transcriptId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Transcript'
    },
    information:{
        type:String
    }
})
const consult = mongoose.model('Consultation',consultation);
module.exports = consult;