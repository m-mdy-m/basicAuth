const Product = require('../models/Product')
exports.getIndex = async (req,res,nxt)=>{
    const products = await Product.find()
    console.log('prod->' ,products);
    res.render('shop/index', {
        path : req.path,
        title : "HOME",
        products,
    })
}