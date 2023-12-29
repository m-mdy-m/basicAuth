const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/admin");
const isAuth = require('../middleware/auth')
router.get("/add-product",isAuth, adminControllers.getAddProduct);
router.post("/add-product",isAuth,adminControllers.postProduct)

router.get('/admin',isAuth, adminControllers.getAdmin)

router.post('/admin/:prodId',isAuth,adminControllers.deleteProduct)


router.get('/edit-product/:prodId',isAuth,adminControllers.editProduct)
router.post('/edit-product/:prodId',isAuth,adminControllers.postEdit)
module.exports = router;
