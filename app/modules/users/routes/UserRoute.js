const express = require('express');
const router = express.Router();
const userController = require('../controllers/UsersController');

router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);

export default router;