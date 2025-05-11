const express = require('express');
const router = express.Router();
const controller = require('./../Controllers/ConsulationController');
router.route('/addConsultant').post(controller.createConsultation);
router.route('/allConsult').get(controller.getAllConsultations);
router.route('/getConsult/:consultationId').get(controller.getConsultationById);
module.exports = router;