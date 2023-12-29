exports.getIndex = (req,res,nxt)=>{
    res.render('shop/index', {
        path : req.path,
        title : "HOME",
    })
}