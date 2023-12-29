exports.getAddProduct = (req,res,nxt)=>{
    res.render('admin/add-product', {
        title:"ADD-PRODUCT",
        path: req.path,
        editing : false,
    })
}