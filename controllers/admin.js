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
    const editing = req.quey.edit
    console.log(id);
    console.log(editing);
}
 

