const nodemailer = require('nodemailer')

// 创建一个邮件发送对象
let transporter = nodemailer.createTransport({
    host: "smtp.qq.com", // qq邮箱的服务器，node_modules/nodemailer/lib/well-known/services.json
    port: 465,
    secure: true, // true for 465, false for other ports
    // secureConnection: false,
    // qq邮箱 -> 设置 -> 账户 -> POP3/SMTP服务 -> 点击开启 -> 发送短信 -> 点击已发送 -> 获取验证码
    auth: {
    //   user: 'brandonhulala@163.com', // 发送方的邮箱
        user: '290730757@qq.com',
        pass: 'oaxrjfxwdadrbhbe',
    }
  });

// 封装一个函数，用于发送邮件，参数是邮件地址和验证码
function send(address,code){
  // 定义邮件的内容
  let obj = {
    from: '290730757@qq.com', // 显示邮件的来源
    to: address, // 接收方的邮件地址
    subject: "Hello ✔", // 邮件的主题
    text: `你的验证码是${code}`, // 纯文本
    // html: "<b>Hello youngster</b>" // html body
  }

  // 使用promise封装这个发送邮件的异步操作
  return new Promise((resolve,reject) => {
    transporter.sendMail(obj,(err) => {
      if(err){
        reject('邮件发送失败')
      }else{
        resolve('邮件发送成功')
      }
    });      
  })
}

module.exports = {
  send
}

