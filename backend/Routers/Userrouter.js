const express = require('express');
const controller = require('../Controllers/UserController');
const {loginUser}=require("../Controllers/UserController");
const authMiddleware = require('../middleware/authMiddleWare');
const router = express.Router();
router.route('/addUser').post(controller.addUser);
router.route('/login').post(controller.loginUser)
router.route('/getUser').get(controller.getAllUser);
router.route('/getUser/:email').get(authMiddleware,controller.getUserByEmail);
router.route('/updateUser/:email').patch(controller.updateUserDetail);
module.exports = router