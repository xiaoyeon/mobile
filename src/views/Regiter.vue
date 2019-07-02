<template>
    <div class="register">

         <!-- <h2>{{msg}}</h2> -->
        <form action="" id="userForm" method="POST">
            <p>免费注册</p>
            <p> <label for="username">用户名:</label> <input type="text" name="username" id="username" placeholder="请输入用户名"
                    v-model="username" @blur="changeNameColor" @change="changeNameColor" @input="changeNameColor"><br />
                <span class="usernamespan" :style="{color: usernamecolor} ">{{usernamespan}}</span>
            </p>
            <p> <label for="userpsw">密码: </label> <input type="password" name="userpsw" id="userpsw" placeholder="请输入密码"
                    v-model="userpsw" @blur="changepwdcolor" @change="changepwdcolor" @input="changepwdcolor"><br />
                <!-- <span class="userpswspan">{{userpswspan}}</span> -->
                <span></span>
            </p>
            <p><label for="userpsw2"> 确认密码: </label><input type="password" name="userpsw2" id="userpsw2" placeholder="确认密码" v-model="userpsw2"
                    @blur="changepwdcolor" @change="changepwdcolor" @input="changepwdcolor"><br />

                <span class="userpswspan" :style="{color: userpwdcolor}">{{userpswspan}}</span></p>
            <p><label for="usertel"> 手机号: </label> <input type="text" placeholder="请输入手机号" v-model="tel"
                    @blur="changetelcolor" @change="changetelcolor" @input="changetelcolor"><br>
                <span class="usertelspan" :style="{color: usertelcolor}">{{usertelspan}}</span><br /></p>

            

        </form>
        <div class="btn">
                <input type="button" value="注册" id="regBtn" @click="tiJiao">
            </div>
        <router-link to='/login'>已有账号直接登录</router-link>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name:'register',
        data(){
            return {
                //msg:'欢迎注册',
                username: '',
                userpsw: '',
                userpsw2: '',
                tel: '',
                //用户名、密码、手机号提示文字
                usernamespan: "用户名由4-10位数字、字母、下划线或$表示",
                userpswspan: "密码由6-12位数字、字母组成",
                usertelspan: "",
                //判断用户名、密码、手机号格式是否正确
                flag1: false,
                flag2: false,
                flag3: false,
                //判断用户名、密码、手机号格式是否正确
                //用户名、密码、手机号提示字体颜色
                usernamecolor: '#a4adab',
                userpwdcolor: '#a4adab',
                usertelcolor: '#a4adab'
            }
        },
        methods:{
             //验证名字
                changeNameColor() {
                    this.flag1 = false
                    let usernameReg = /^[a-z0-9_$][a-z0-9_$]{3,9}$/ig;
                    if (usernameReg.test(this.username)) {
                        this.flag1 = true
                        this.usernamecolor = 'green'
                        this.usernamespan = '√ 用户名正确'
                    } else {
                        this.usernamecolor = 'red'
                        this.usernamespan = 'x 用户名格式错误'
                    }
                },
                //验证密码
                changepwdcolor() {
                    this.flag2 = false
                    //密码强度判断,数字/小写字母/大写字母,存在一种弱密码,存在两者,中密码;三者存在,强密码
                    let userpswReg = /^[a-z0-9]{6,12}$/ig; //由数字,字母组成
                    let userpswRegDa = /[A-Z]/g;
                    let userpswRegXiao = /[a-z]/g;
                    let userpswRegNum = /[0-9]/g;
                    //采用计数法
                    let count = 0;
                    if (userpswReg.test(this.userpsw)) {
                        this.userpwdcolor = 'green'
                        this.userpswspan = "√ 密码正确"
                        if (this.userpsw == this.userpsw2) {
                            this.flag2 = true
                            if (userpswRegDa.test(this.userpsw)) {
                                count++
                            }
                            if (userpswRegXiao.test(this.userpsw)) {
                                count++
                            }
                            if (userpswRegNum.test(this.userpsw)) {
                                count++
                            }
                            //计算总数
                            if (count == 3) {
                                this.userpswspan = "√   密码强度:高";
                                this.userpwdcolor = 'green'
                            }
                            if (count == 2) {
                                this.userpswspan = "√   密码强度:中";
                                this.userpwdcolor = 'green'
                            }
                            if (count == 1) {
                                this.userpswspan = "√   密码强度:弱";
                                this.userpwdcolor = 'green'
                            }
                        } else {
                            this.userpwdcolor = 'red'
                            this.userpswspan = "两次输入密码不一致"
                        }
                    } else {
                        this.userpwdcolor = 'red'
                        this.userpswspan = "× 密码格式不正确 密码由6-12位数字、字母组成"
                    }

                },
                //验证电话号码
                changetelcolor() {
                    this.flag3 = false
                    let phoneReg = /^1[3-9][0-9]{9}$/ig;
                    if (phoneReg.test(this.tel)) {
                        this.flag3 = true
                        this.usertelcolor = 'green'
                        this.usertelspan = "√ 手机号可用"
                    } else {
                        this.usertelcolor = 'red'
                        this.usertelspan = "× 请输入正确的手机号!"
                    }
                },
                //点击注册按钮时
                tiJiao() {
                    //检验输入框内容没有输入时,点击注册按钮的判断
                    if (this.flag1 == false) {
                        this.usernamecolor = 'red'
                        this.usernamespan = "× 请填写正确的用户名"
                    }
                    if (this.flag2 == false) {
                        this.userpwdcolor = 'red'
                        this.userpswspan = "× 请填写正确的密码"
                    }
                    if (this.flag3 == false) {
                        this.usertelcolor = 'red'
                        this.usertelspan = "× 请填写正确的手机号"
                    }
                    //所有内容都输入,并且都是正确的格式时,向数据库发送axios请求数据
                    if (this.flag1 == true && this.flag2 == true && this.flag3 == true) {
                        axios.post('http://192.168.53.52:8989/user/register', {
                            username: this.username,
                            userpsw: this.userpsw,
                            tel: this.tel
                            //let {username,userpsw}=this
                        }).then((res) => {
                            console.log(res)
                            const {
                                code,
                                msg
                            } = res.data
                            if (code == 1) {
                                alert(msg)
                                // window.location.href = "./login.html"
                                //注册成功,跳到登录login页面
                                this.$router.push('/login')
                            } else {
                                alert(msg)
                            }
                        }).catch((err) => {
                            console.log(err)
                        })
                    }
                }
        }
    }
</script>

<style lang="scss" scoped>
    //问题:改样式,以及顶部导航,底部导航去掉(或者不写在公共部分)
    .register{
        width: 7.5rem;
        margin-top: .96rem;
        margin-bottom: .91rem;
        a{
            color: #000;
            text-decoration: underline;
            font-size: .36rem;
        }
    }

        #userForm {
            // width: 450px; height: 320px;margin: 30px auto;
            width: 100%;
            height: auto;
            margin: .3rem auto;
            //border: 1px solid black;
            display: flex;
            flex-direction: column;
            flex:1;
        }
        label{
            width: 1.9rem;
            height: 0.8rem;
            line-height:.8rem ;
            font-size: .36rem;
            margin-left: .3rem;
        }
        input {
            // width: 160px;height: 20px;
            width: 4.3rem;
            //height: .2rem;
            line-height: .5rem;
            box-sizing: border-box;
            font-size: .32rem;
            vertical-align: middle;
        }

        p {
            padding: 0.1rem;
            border-bottom: 1px solid #000;
            text-align: left;
        }

        p:nth-child(1) {
            text-align: center;
            text-indent: 0;
            height: 0.7rem;
            line-height:0.7rem ;
            font-size: .36rem;
        }

        span {
            //width: 80px;height: 20px;line-height: 20px;margin-left: 10px;font-size: 10px;
            //width: .8rem;
            height: .4rem;
            line-height: .4rem;
            margin-left: .3rem;
            text-align: center;
            font-size: .32rem;
        
        }

        .btn {
            // height: 50px;
            height: auto;
            text-align: center;
            margin-bottom: .4rem;
            
        }

        .btn input {
            //width: 100px;height: 25px;
            width: 4rem;
            height: .8rem;
            line-height: .8rem;
            font-size: .32rem;
            border: 0;
            background-color: crimson;
            color: #fff;
            border-radius: 3px;
            outline: none;
    }
</style>