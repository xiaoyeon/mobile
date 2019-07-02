const express = require('express')


//引入model,用于操作数据库数据
const userModel = require('../db/model/user.js')

const router = express.Router()

//首页的商品获取
router.post('/home',(req, res)=>{

})