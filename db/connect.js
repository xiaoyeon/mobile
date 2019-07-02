    const mongoose = require('mongoose')

    // 1.连接数据库
    mongoose.connect('mongodb://localhost/mobile',{ useNewUrlParser: true})

    // 2.获取连接对象
    const connection = mongoose.connection

    // 3.监听连接，判断是否成功
    connection.once('open',() => {
        console.log('连接成功')
    })
    connection.on('err',() => {
        console.log('连接失败')
    })