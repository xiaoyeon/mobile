module.exports = {
    devServer:{
        proxy:{ //反向代理
            '/api':{
                target:'htttp://localhost:8080',//实际请求的地址等于target加上/api
                ws:true, // 是否开启websocket
                changeOrigin:true, //是否开启代理服务
                pathRewrite:{ //路径重写
                    '^/api':'' 
                    /*将开头的/api换成空,所以实际的请求地址就变更成
                    target加上你的路由路径
                    */
                }
            }
        }
    }
}