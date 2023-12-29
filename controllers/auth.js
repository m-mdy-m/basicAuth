const User = require('../models/User')
exports.getSignUp = (req,res,nxt)=>{
    res.render('auth/signup', {
        title : 'signUp',
        path:req.path,
    })
}
exports.postSignUP = async (req,res,nxt)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    let user = await User.findOne({email})
    if(user){
        console.log('email used');
        return res.redirect('/signup')
    }
    user = await User.create({
        name,
        email,
        password
    })
    await user.save()
    res.redirect('/')
}