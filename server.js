const express=require('express')
const path=require('path')
const app=express()

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use('/',express.static(path.join(__dirname,'public_html')))

app.use('/api',require('./routes/api'))

app.listen(4554,()=>{
    console.log('Started on http://localhost:4554')
})