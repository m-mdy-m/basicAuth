const express = require('express')
const router = express.Router()
const shopControllers = require('../controllers/shop')
router.get('/',shopControllers.getIndex )
module.exports = router