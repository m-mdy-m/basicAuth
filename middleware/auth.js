module.exports = (req,res,nxt)=>{
    if (!req.session.isLog){
        return res.redirect('/signup')
    }
    nxt()
}