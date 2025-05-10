const express = require('express');
const controller = require('../Controllers/UserController');
const router = express.Router();
router.route('/addUser').post(controller.addUser);
router.route('/getUser/:email').get(controller.getUserByEmail);
router.route('/updateUser/:email').patch(controller.updateUserDetail);
module.exports = router