const { JsonWebTokenError } = require('jsonwebtoken');
const User = require('./../Models/User');
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken')


exports.addUser = async (req, res, next) => {
  try {
    const { name, email, password, phone_no, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const checkExistingUser = await User.findOne({
      $or: [{ email }, { phone_no }]
    });

    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        message: "User with same email or phone number already exists."
      });
    }
    const newUser = new User({
      name,
      email,
      phone_no,
      password
    });

    await newUser.save();

    res.status(201).json({
      status: 'success',
      message: "New user created successfully",
      data: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone_no: newUser.phone_no
      }
    });

  } catch (error) {
    res.status(500).json({
      status: 'internal server error',
      error: error.message
    });
  }
};


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email }).select('+password');
    if (!findUser) {
      return res.status(400).json({
        success: false,
        message: "Email does not exist"
      });
    }

    // console.log("Entered password:", password);
    // console.log("Hashed password from DB:", findUser.password);

    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if (!passwordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    }
else
  {  const accessToken = jwt.sign({
      userId: findUser._id,
      name: findUser.name
    }, process.env.JWT_SECRET_KEY, {
      expiresIn: '15m'
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      userId:userId,
      accessToken
    });}

  } catch (e) {
    console.error("Login Error:", e);
    res.status(500).json({
      success: false,
      message: "Some error occurred"
    });
  }
};





exports.getAllUser=async(req,res,next)=>{
    const alluser=await User.find({})
    if(alluser.length>0){
        res.json({
            status:201,
            data:alluser
        })
    }
    else{
        res.json({
            message:"not users yet added"
        })
    }
}
exports.getUserByEmail = async (req, res, next) => {
    try {
        const { email } = req.params;
        console.log(email);
        if (!email) {
            return res.status(404).json({ status: 'failure', message: 'please enter the email' });
        }
        const DisplayUser = await User.findOne({ email });
        console.log(DisplayUser);
        if (!DisplayUser) {
            return res.status(404).json({ status: 'failure', message: 'the user with the email does not exist' });
        }
        res.status(200).json({
            status: 'success',
            DisplayUser
        })
    }
    catch (error) {
        res.status(500).json({ status: 'internal server error', error });
    }
}
exports.updateUserDetail = async (req, res, next) => {
    try {
        const { email } = req.params;
        const DatatobeUpdated = req.body;
        if (!email) {
            return res.status(404).json({ status: 'failure', message: 'user with email not found' });
        }
        const UpdatedUser = await User.findOneAndUpdate({ email }, { $set: DatatobeUpdated }, { new: true });
        if (!UpdatedUser) {
            return res.status(404).json({ status: 'failure', message: 'failed to update' });
        }
        res.status(200).json({ status: 'success', UpdatedUser });
    } catch (error) {
        res.status(500).json({ status: 'not success', error });
    }
}
