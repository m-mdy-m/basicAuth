exports.getSignUp = (req,res,nxt)=>{
    res.render('auth/signup', {
        title : 'signUp',
        path:req.path,
        
    })
}