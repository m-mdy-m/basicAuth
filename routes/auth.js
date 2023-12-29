const express = require('express')
const router = express.Router()
const authControllers = require('../controllers/auth')
router.get('/signup', authControllers.getSignUp)

module.exports = router