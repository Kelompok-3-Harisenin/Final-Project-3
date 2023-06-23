const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController.js');

// Rute pendaftaran pengguna baru
router.post('/register', userController.register);

// Rute otentikasi pengguna
router.post('/login', userController.login);

// Rute pengelolaan profil pengguna
router.get('/profile', userController.profile);
router.put('/profile', userController.updateProfile);

// Rute pemulihan kata sandi
router.post('/forgot-password', userController.forgotPassword);
router.put('/reset-password/:token', userController.resetPassword);

module.exports = router;