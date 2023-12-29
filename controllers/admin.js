const Product = require("../models/Product");
exports.getAddProduct = (req, res, nxt) => {
  res.render("admin/add-product", {
    title: "ADD-PRODUCT",
    path: req.path,
    editing: false,
  });
};
exports.postProduct = async (req, res, nxt) => {
  const title = req.body.title;
  const price = req.body.price;
  const newP = await Product.create({
    title,
    price,
  });
  await newP.save();
  console.log("create Product");
  res.redirect("/");
};
exports.getAdmin = async (req,res,nxt)=>{
    const products = await Product.find()
    res.render('admin/dashboard', {
        path : req.path,
        title : "ADMIN",
        products,
    })
}
exports.deleteProduct = async (req,res,nxt)=>{
    const id = req.params.prodId
    await Product.findByIdAndDelete(id)
    console.log('delete product')
    res.redirect('/')
}
exports.editProduct = async (req,res,nxt)=>{
    const id = req.params.prodId
    const editing = req.query.edit
    try{
        const product = await Product.findById(id)
        res.render('admin/add-product',{
            title:"edit",
            path:req.path,
            product,
            editing
        })
    }catch(err){

    }
}
 
exports.postEdit = async (req,res,nxt)=>{
    const id = req.params.prodId
    const title = req.body.title
    const price = req.body.price
    const upP =     await Product.findByIdAndUpdate(id ,{
        title,
        price
    }) 
    console.log('updateProduct')
    return res.redirect('/')
}
