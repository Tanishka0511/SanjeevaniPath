
const User = require('./../Models/User');
exports.addUser = async(req,res,next)=>{
    console.log(req.body);
    try{
        const newUser = await User.create(req.body);
        res.status(201).json({status:'success',newUser});
    }
    catch(error) {
        res.status(500).json({
            status:'internal server error',
            error
        })
    }
}
exports.getUserByEmail = async(req,res,next)=>{
    try{
        const {email} = req.params;
        console.log(email);
        if(!email) {
            return res.status(404).json({status:'failure',message:'please enter the email'});
        }
        const DisplayUser = await User.findOne({email});
        console.log(DisplayUser);
        if(!DisplayUser) {
            return res.status(404).json({status:'failure',message:'the user with the email does not exist'});
        }
        res.status(200).json({
            status:'success',
            DisplayUser
        })
    }
    catch(error){
        res.status(500).json({status:'internal server error',error});
    }
}
exports.updateUserDetail = async(req,res,next)=>{
    try{
       const {email} = req.params;
       const DatatobeUpdated = req.body;
       if(!email) {
        return res.status(404).json({status:'failure',message:'user with email not found'});
       }
       const UpdatedUser = await User.findOneAndUpdate({email},{$set:DatatobeUpdated},{new:true});
       if(!UpdatedUser) {
        return res.status(404).json({status:'failure',message:'failed to update'});
       }
       res.status(200).json({status:'success',UpdatedUser});
    }catch(error){
        res.status(500).json({status:'not success',error});
    }
}

