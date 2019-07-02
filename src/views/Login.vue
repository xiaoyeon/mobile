<template>
    <div class="login">
        <div class="title">登录</div>
        <p>
            <input type="text" v-model="username" placeholder="请输入用户名">
        </p>
        <p>
            <input type="password"  v-model="userpsw" placeholder="请输入密码">
        </p>
        <p>
        <!-- <input type="button" :value='登录' @click="data"> -->
        <button @click="toLogin">登录</button>
        </p>
        <div class="tolink">
            <a href=""><span>忘记密码</span></a>
            <router-link to="/register"><span>没有账号? 免费注册</span></router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
      name:'login',
      data(){
          return {
            username: "",
            userpsw: ""
          }
      },
     methods:{
                toLogin(){//老师使用了子组件,需要传参数data
                   // console.log(data)
                    // const {username,userpsw}=data
                    // console.log(username,userpsw)
                    axios.post('http://192.168.53.52:8989/user/login',{
                       telname: this.username,//为了验证手机号或者用户名登录
                       userpsw:this.userpsw,
                      
                    }).then((res)=>{
                        console.log(res)
                        //console.log(res.data)
                        const {code,msg,token}=res.data
                        if(code==1){
                            alert(msg)
                            //登录成功,先把token存在本地
                            localStorage.setItem('token',token)
                            //登录成功,这里跳转到home页面
                            this.$router.push('/mine')
                        }else{
                            alert(msg)
                        }
                    }).catch((err)=>{
                        console.log(err)
                    })
                },
                
            },
    }
</script>

<style lang="scss" scoped>
    a{
        color: #000;
    }
   
    .login{
        width: 7.5rem;
        margin-top: .96rem;
        
        .title{
            height: .6rem;
            line-height: .6rem;
            text-align: center;
            border-bottom: 1px solid #666;
            margin-bottom: .6rem;
            font-size: .4rem;
        }
        p{
            width: 100%;
            height: 1.2rem;
            line-height: 1.2rem;
            input{
                width: 6rem;
                height: .8rem;
                line-height: .8rem;
                font-size: .32rem;
            }
            button{
                width: 4rem;
                height: 0.6rem;
                line-height: .6rem;
                border: 0;
                background-color: crimson;
                color:#fff;
                border-radius: 3px;
                outline: none;
                font-size: .36rem;
              
            }
        }
        .tolink{
            display: flex;
            width: 100%;
            
            a{
                display: block;
                width: 50%;
                font-size: .32rem;
                text-decoration: underline;
                text-align: center;
            }
            a:hover{
                color:crimson;
               
            }
        }
    }
</style>