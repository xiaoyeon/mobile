<template>
  <div id="app">
    <router-view/>
    <!-- 顶部导航 -->
    <div id="title">
      <a class="title-logo"><img class="title-logo" src="../public/img/title-logo.png" alt=""></a>
    </div>
    <!-- 底部导航 -->
    <div id="nav">
      <router-link to="/"> <i class="iconfont icon-yemian-copy"></i><span>首页</span>
      </router-link> 
      <router-link to="/sort"><i class="iconfont icon-fenlei"></i><span>分类</span></router-link>
      <router-link to="/shoppingcar"><i class="iconfont icon-chat-gray"></i><span>购物车</span></router-link>
      <router-link to="/community"><i class="iconfont icon-quedingshequ"></i><span>社区</span></router-link>
      <router-link to="/mine"><i class="iconfont icon-yonghu"></i><span>用户中心</span></router-link>
    </div>
    <!--  -->
    
  </div>
</template>

<style lang="scss">
  img{
    vertical-align: middle;
  }
 
  * {
            padding: 0;
            margin: 0;
            outline: none;
            text-decoration: none
        }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #title{
    width: 7.5rem;
    height: 0.96rem;
    line-height: .96rem;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.10);
    background-color: #fff;
    z-index: 2;
    a{

      img{
        width: 0.6rem;
      }
    }
  }
  #nav {
    width: 7.5rem;
    position: fixed;
    //height: 0.7rem;
    left: 0;
    bottom: 0;
    display: flex;
    background-color: #fff;
    border-top: 1px solid #000;
    z-index: 2;
    //padding: 30px;
    a {
        flex:1;
        height:.9rem;
        font-weight: bold;
         color:#999;
        text-decoration: none;
        text-align: center;
        display: flex;
        flex-direction: column;
        &.router-link-exact-active {
          // color: #42b983;
          color:#000;
        }
        i{
          width: .5rem;
         height: .5rem;
          line-height: .5rem;
          padding-top: 0.05rem;
         // flex:1;
          font-size: .4rem;
          margin: auto;
        }
        
        span{
         
          display: inline-block;
          width: 100%;
          height: 0.2rem;
          line-height: 0.2rem;
          font-size: .2rem;
          color:#666;
        }
    }
  }
</style>
