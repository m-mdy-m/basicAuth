const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended : false}))

const start = ()=>{
    try {
        app.listen(3000,()=>{console.log('run server on port 3000');})
    } catch (error) {
        console.log(error);
    }
}
start()