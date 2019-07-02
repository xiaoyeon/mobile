const jwt = require('jsonwebtoken')

// 1.定义一个私钥
const secret = 'xiaobu666'

// 2.封装一个函数，用于创建token
function createToken(data){
    return jwt.sign(data,secret)
}

// 3.封装一个函数，用于校验token
function checkToken(token){
    return new Promise((resolve,reject) => {
        jwt.verify(token,secret,(err,data) => {
            if(err){
                reject('检验失败')
            }else{
                resolve(data)
            }
        })    
    })
}

module.exports = {
    createToken,
    checkToken
}
