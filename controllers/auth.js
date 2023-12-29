const User = require('../models/User')
const bcryptjs = require('bcryptjs')
exports.getSignUp = (req,res,nxt)=>{
    res.render('auth/signup', {
        title : 'signUp',
        path:req.path,
    })
}
exports.postSignUP = async (req,res,nxt)=>{
    const name = req.body.name
    const email = req.body.email
    const passwordStr = req.body.password
    const password = await bcryptjs.hash(passwordStr,8)
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
    console.log('create user');
    res.redirect('/')
}
exports.getLogin = async (req,res,nxt)=>{
    res.render('auth/login',{
        title : "LOGIN",
        path:req.path,
    })
}