const Product = require('../models/Product')
exports.getAddProduct = (req,res,nxt)=>{
    res.render('admin/add-product', {
        title:"ADD-PRODUCT",
        path: req.path,
        editing : false,
    })
}
exports.postProduct = async (req,res,nxt)=>{
    const title = req.body.title
    const price = req.body.price
    console.log('title =>', title);
    console.log('price =>', price);
    const newP = await Product.create(
        title,
        price
    )
    await newP.save()
    console.log("create Product")
    res.redirect('/')
}