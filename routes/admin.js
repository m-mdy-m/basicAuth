const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/admin");
router.get("/add-product", adminControllers.getAddProduct);
router.post("/add-product",adminControllers.postProduct)

router.get('/admin', adminControllers.getAdmin)

router.post('/admin/:prodId',adminControllers.deleteProduct)


router.get('/edit-product/:prodId',adminControllers.editProduct)
module.exports = router;
