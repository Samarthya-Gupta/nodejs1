const express = require('express')
const path = require('path')
// const publicdir=path.join(__dirname,'../views')
const app=express()

// app.use(express.static(path.join(__dirname,'../views')))
// app.use(express.static(publicdir))

app.set('view engine', 'hbs')
app.get('/',(req,res)=>{
    res.render('index')
})
// app.get('',(req,res)=>{
//     res.send('hello express!')
// })
// app.get('/help',(req,res)=>{
//     res.send('help page')
// })
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('server is up on 3000')
})
