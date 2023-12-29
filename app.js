const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path')
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname , 'public')))
const URL = "mongodb://localhost:27017/basicAuth"
const shopRoute = require('./routes/shop')
const adminRoute = require('./routes/admin')
const authRoute = require('./routes/auth')
app.use(authRoute)
app.use(shopRoute)
app.use(adminRoute)
const start = async ()=>{
    try {
        await mongoose.connect(URL)
        console.log('connect database');
        app.listen(3000,()=>{console.log('run server on port 3000');})
    } catch (error) {
        console.log(error);
    }
}
start()