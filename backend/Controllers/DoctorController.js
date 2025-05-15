

const Doctor = require('./../Models/DoctorSchema'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Add Doctor
exports.addDoctor = async (req, res, next) => {
  try {
    const { name, qualification, email, speciality, password, confirmPassword } = req.body;

    // Check if the password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if a doctor with the same email already exists
    const checkExistingDoctor = await Doctor.findOne({ email });
    if (checkExistingDoctor) {
      return res.status(400).json({
        success: false,
        message: "Doctor with the same email already exists."
      });
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new doctor instance
    const newDoctor = new Doctor({
      name,
      qualification,
      email,
      speciality,
      password: hashedPassword
    });

    // Save the doctor to the database
    await newDoctor.save();

    res.status(201).json({
      status: 'success',
      message: 'Doctor registered successfully',
      data: {
        id: newDoctor._id,
        name: newDoctor.name,
        email: newDoctor.email,
        speciality: newDoctor.speciality
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

    const findUser = await Doctor.findOne({ email }).select('+password');
    if (!findUser) {
      return res.status(400).json({
        success: false,
        message: "Email does not exist"
      });
    }

    console.log("Entered password:", password);
    console.log("Hashed password from DB:", findUser.password);

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


// Get Doctor by Email
exports.getDoctorByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;
    
    // Validate email
    if (!email) {
      return res.status(400).json({ status: 'fail', message: 'Please enter the email' });
    }

    // Find the doctor by email
    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(404).json({ status: 'fail', message: 'Doctor with the email not found' });
    }

    res.status(200).json({ status: 'success', doctor });
  } catch (error) {
    return res.status(500).json({ status: 'internal server error', error: error.message });
  }
};

// Update Doctor by Email
exports.updateDoctorByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;
    const info = req.body;
    
    // Validate email
    if (!email) {
      return res.status(400).json({ status: 'failure', message: 'Please enter the email' });
    }

    // Update the doctor by email
    const updatedDoctor = await Doctor.findOneAndUpdate({ email }, { $set: info }, { new: true });
    
    if (!updatedDoctor) {
      return res.status(404).json({ status: 'failure', message: 'Doctor with the email not found and cannot be updated' });
    }

    res.status(200).json({ status: 'success', updatedDoctor });
  } catch (error) {
    res.status(500).json({ status: 'failure', error: error.message });
  }
};

// Get All Doctors
exports.getAllDoctors = async (req, res, next) => {
  try {
    const allDoctors = await Doctor.find({});
    if (allDoctors.length > 0) {
      res.status(200).json({
        status: 201,
        data: allDoctors
      });
    } else {
      res.status(404).json({
        message: "No doctors found"
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 'internal server error',
      error: error.message
    });
  }
};
