const express = require('express')


//引入model,用于操作数据库数据
const userModel = require('../db/model/user.js')

const router = express.Router()

//注册部分
router.post('/register', (req, res) => {
    const {
        username,
        userpsw,
        tel
    } = req.body
    userModel.find({
            username
        }).then((data) => {
            //console.log('123', data)
            if (data.length) {
                res.send({
                    code: -1,
                    msg: '该账户已经注册'
                })
                return false
            } else {
                return userModel.insertMany({
                    username,
                    userpsw,
                    tel
                })
                //此时后面接.then造成了复杂的回调,所以将.then 的内容调到外面
            }
        })
        .then((data) => {
            if (data) {
                res.send({
                    code: 1,
                    msg: '注册成功'
                })
            }
        })
        .catch((err) => {
            console.log(err)
            res.send({
                msg: '内部错误',
                code: -1
            })
        })
})

//登录部分
const jwt = require('../utils/jwt.js')
router.post('/login', (req, res) => {

    const {
        telname,
        userpsw
    } = req.body
    console.log(telname, userpsw)
    userModel.find({
            $or: [{
                username: telname
            }, {
                tel: telname
            }]
        }).then((data) => {
            console.log(data)
            if (data.length) {

                //找到,说明该用户名已经注册,再判断密码
                //data是数组,存放了json格式的对象,输出为[{}]数组,其实data里面是空对象
                if (data[0].userpsw == userpsw) {
                    console.log('123')
                    let username = data[0].username
                    let userpsw = data[0].userpsw
                    let tel = data[0].tel
                    let token = jwt.createToken({
                        username,
                        userpsw,
                        tel
                    })

                    res.send({
                        code: 1,
                        msg: '登录成功'
                    })
                } else {
                    res.send({
                        code: -1,
                        msg: '密码错误'
                    })
                }

            } else {
                res.send({
                    msg: '该账户不存在',
                    code: -1
                })
            }
        })
        .catch((err) => {
            console.log(err)
            res.send({
                msg: '内部错误',
                code: -1
            })
        })
})
module.exports = router