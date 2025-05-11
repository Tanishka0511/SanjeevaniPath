const express = require('express');
const router = express.Router();
const controller = require('./../Controllers/groqController');
router.route('/groqQuery').post(controller.getChatResp);
module.exports=router;