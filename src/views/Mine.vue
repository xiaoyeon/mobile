<template>
    <div class="mine">
        <p class="title">个人中心</p>
        <div class="tolink">
            <router-link to="/register"><span>去注册或登录</span></router-link>
        </div>
        <ul class="myrights">
            <li>
                <a>用户反馈<i class="iconfont"></i></a>
            </li>
            <li>
                <a>版本更新<i class="iconfont"></i></a>
            </li>
            <li>
                <a>服务条款<i class="iconfont"></i></a></li>
            <li>
                <a>关于我们<i class="iconfont"></i></a></li>
            <li>
                客服电话 400 650 2121 <i></i></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"mine",
        data(){
            return{
                
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .mine{
        margin-top: .96rem;
        width: 7.5rem;
        .title{
            height: 0.96rem;
            line-height: .96rem;
            text-align: center;
            background-color: #fff;
            border-bottom: 1px solid rgb(29, 27, 27);
            font-size: .34rem;
        }
        .tolink{
            a{
                display: block;
                // color: rgb(233, 76, 76);
                color: #fff;
                //background-color: #111;
                 background-color: rgb(31, 28, 28);
                text-align: right;
                font-size: .28rem;
                span{
                    height: 1rem;
                    line-height: 1rem;
                   
                    margin-right: 1rem;
                }
                
            }
        }
        .myrights{
            li{
                text-align: left;
                border-bottom: 1px solid #999;
                height: 1.2rem;
                line-height: 1.2rem;
                font-size: .32rem;
                text-indent: .4rem;
                a{
                     color: #222;
                     position: relative;
                     text-indent: .1rem;
                    
                    i{
                        position: absolute;
                    }
                }

            }
        }
    }
</style>