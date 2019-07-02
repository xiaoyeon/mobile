const mongoose = require('mongoose')

//4,创建一个Schema对象,相当于定义MySQL里面的表结构(如,username,userpsw等)
//require 表示必填内容
    const userSchema = new mongoose.Schema({
        username:{
            type:String,required:true
        },
        userpsw:{
            type:String,required:true
        },
        tel:{
            type:String,required:true
        },
    })
//5,创建一个集合
    const User = mongoose.model('user',userSchema)

//6,导出
    module.exports = User