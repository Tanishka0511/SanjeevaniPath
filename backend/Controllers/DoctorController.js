
const Doctor = require('./../Models/DoctorSchema');
exports.addDoctor = async(req,res,next)=>{
    try{
        console.log(req.body);
        const newDoc = await Doctor.create(req.body);
        res.status(201).json({status:'success',newDoc});
    }
    catch(error) {
        res.status(500).json({status:'internal server error',error});
    }
}
exports.getDoctorByEmail = async(req,res,next)=>{
    try{
        const {email} = req.params;
        if(!email) {
            return res.status(400).json({status:'fail',message:'please enter the email'});
        }
        const doc = await Doctor.findOne({email});
        if(!doc) {
            return res.status(404).json({status:'fail',message:'the doctor the email not found'});
        }
        res.status(200).json({status:'success',doc});
    }
    catch(error) {
        return res.status(500).json({status:'internal server error',error});
    }
}
exports.updateDoctorByEmail = async(req,res,next)=>{
    try{
        const {email} = req.params;
        const info = req.body;
        console.log(email);
        if(!email) {
            return res.status(400).json({status:'failure',message:'please enter the email'});
        }
        const updatedDoc = await Doctor.findOneAndUpdate({email},{$set:info},{new:true});
        console.log(updatedDoc);
        if(!updatedDoc) {
            return res.status(404).json({status:'failure',message:'Doctor with the email not found and can not be updated'});
        }
        res.status(200).json({status:'success',updatedDoc});
    }catch(error) {
        res.status(500).json({status:'failure',error});
    }
}