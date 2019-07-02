    const express = require('express')
    const path  = require('path')
    const bodyParse = require('body-parser')
    const cors = require('cors')

    //连接数据库
    const connect =  require('./db/connect.js')
    //引用路由
    const userRouter =require('./router/user.js')

    //引入jwt
    const jwt = require('./utils/jwt.js')
    const app  = express()

    app.use(cors()) //跨域设置
    //post传入数据格式解析
    app.use(bodyParse.urlencoded({extended: false}))
    app.use(bodyParse.json())
    app.use(express.static(path.join(__dirname,'./static')))
    //app.use(express.static(path.join(__dirname, '/')))

    //使用路由/中间件app.use()
    app.use('/user',userRouter)

    app.listen(8989,() => {
        console.log('your server is running')
    })