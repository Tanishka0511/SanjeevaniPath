const express = require('express');
const controller = require('./../Controllers/DoctorController');
const router = express.Router();
router.route('/getDoctor/:email').get(controller.getDoctorByEmail);
router.route('/addDoctor').post(controller.addDoctor);
router.route('/login').post(controller.loginUser)
router.route('/updateDoctor/:email').patch(controller.updateDoctorByEmail);
module.exports = router;
