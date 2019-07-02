<template>
  <div id="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 这里放swiper-container组件标签 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- 无缝滚动的时候，如果有5张，会在页面上多出2张图片，头部插入最后一张，尾部插入第一张 -->

        <a class="swiper-slide notFirst" v-for="(item,index) in url" :key="index">
          <img :src="item" />
        </a>
        <!-- <img src="../assets/img/1.jpg" alt="">  -->
      </div>

      <!-- 分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 导航按钮
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>-->
    </div>
    <!-- home主要内容 -->
    <div class="home-content">
      <!-- 活动的权益列表 -->
      <ul class="rights-box">
        <li>
          <i class="home-icon"></i>新客满198元赠冰淇淋
        </li>
        <li>
          <i class="home-icon"></i>满100包邮
        </li>
        <li>
          <i class="home-icon"></i>全程冷链配送
        </li>
      </ul>
      <!-- 商品菜单 -->
      <ul class="menu-box">
        <li>
          <a @click="toCake">
            <img src="../../public/img/menu1.png" alt />蛋糕
          </a>
        </li>
        <li>
          <a @click="toBread">
            <img src="../../public/img/menu2.png" alt />面包
          </a>
        </li>
        <li>
          <a @click="toTea">
            <img src="../../public/img/menu3.png" alt />下午茶
          </a>
        </li>
        <li>
          <a >
            <img src="../../public/img/menu4.png" alt />企业中心
          </a>
        </li>
      </ul>
      <!-- 商品列表 -->
      <div class="mould-goods">
        <!-- 新品--商品列表 -->
        <div class="mounld-goods-content">
          <!-- 题头h3 -->
          <h3 class="title-goods">
              <span>新品</span>
              <a href="">更多<i class="iconfont icon-arrow-left"></i>
              </a>
         
          </h3>
          <!-- 商品ul -->
          <ul>
            <li>
              <a @click="toDetail"><img src="../../public/img/xinpin1.jpg" alt=""></a>
              <div class="bottom-priceCart">
                  <a href="">
                    <h4>
                      <span class="title">米道</span>
                      <span class="price">298</span>
                      <span>/1.0磅</span>
                    </h4>
                    <p>天真、天然，是做这款蛋糕唯一的出发点</p>
                  </a>
                  <button><i class="iconfont icon-icon1"></i></button>
              </div>
            </li>
            <li>
              <a href=""><img src="../../public/img/xinpin1.jpg" alt=""></a>
              <div class="bottom-priceCart">
                  <a href="">
                    <h4>
                      <span class="title">米道</span>
                      <span class="price">298</span>
                      <span>/1.0磅</span>
                    </h4>
                    <p>天真、天然，是做这款蛋糕唯一的出发点</p>
                  </a>
                  <button><i class="iconfont icon-icon1"></i></button>
              </div>
            </li>
            <li>
              <a href=""><img src="../../public/img/xinpin1.jpg" alt=""></a>
              <div class="bottom-priceCart">
                  <a href="">
                    <h4>
                      <span class="title">米道</span>
                      <span class="price">298</span>
                      <span>/1.0磅</span>
                    </h4>
                    <p>天真、天然，是做这款蛋糕唯一的出发点</p>
                  </a>
                  <button><i class="iconfont icon-icon1"></i></button>
              </div>
            </li>
            <li>
              <a href=""><img src="../../public/img/xinpin1.jpg" alt=""></a>
              <div class="bottom-priceCart">
                  <a href="">
                    <h4>
                      <span class="title">米道</span>
                      <span class="price">298</span>
                      <span>/1.0磅</span>
                    </h4>
                    <p>天真、天然，是做这款蛋糕唯一的出发点</p>
                  </a>
                  <button><i class="iconfont icon-icon1"></i></button>
              </div>
            </li>
          </ul>
        </div>
        <!-- 生日--商品列表 -->
        <div class="mounld-goods-content"></div>
        <!-- 儿童--商品列表 -->
        <div class="mounld-goods-content"></div>
        <!-- 聚会--商品列表 -->
        <div class="mounld-goods-content"></div>
      </div>
      <!-- 进行的活动内容 -->
      <div class="home-activity">
        <h3><span>廿一客·活动</span></h3>
        <div class="home-activity-box">
            <a href="">
              <div class="left-text">
                  <h6>新客权益</h6>
                  <p>点击查看</p>
                  <span>只剩128天</span>
              </div>
              <div class="right-img">
                <img src="../../public/img/activity-img.jpg" alt="">
              </div>
            </a>
        </div>
      </div>
    </div>
    <!-- home- community 网页上本来有关于推送文章的内容 -->
    <!-- bottom  拉到底部时已经没有内容 -->
    <div class="lost-bottom">
      <p>没了</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Swiper from "swiper";
export default {
  name: "home",
  data() {
    return {
      url: [
        "http://res.app.21cake.com/20190626/15615125914626.jpg",
        "http://res.app.21cake.com/20190624/15613478978155.jpg",
        "http://res.app.21cake.com/20190619/15609054328337.jpg",
        "http://res.app.21cake.com/20190524/15586646166702.jpg"
      ]
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 切换连贯，最后到第一张图时候
      autoplay: {
        delay: 2000
      },
      pagination: {
        //分页器
        el: ".swiper-pagination"
      }
    });
  },
  methods:
  {
    toCake(){

    },
    toBread(){

    },
    toTea(){

    },
    toDetail(){
      this.$router.push('/goodsdetail')
    }
  }
};
</script>

<style lang="scss" scpoed>
#home {
  margin-top: 0.96rem;
  margin-bottom: 0.91rem;
  width: 100%;

  //轮播图部分
  .swiper-container {
    margin: auto;
    overflow: hidden;
    .swiper-wrapper {
      width: 100%;
      height: 4.5rem;
      /* 在固定宽高的容器中放置图片 */
      .swiper-slide img {
        width: 100%;
        height: 4.5rem;
        flex-shrink: 0;

        /* 当图片宽高比例与容器的不一致，显示原图内容，但图片旁边会留空白 */
        /* object-fit: contain; */

        /* 当图片宽高比例与容器的不一致，图片占满整个容器，但图片内容会被裁剪 */
        //object-fit: cover;
      }
    }
    //问题:修改不了圆圈的背景样式? 把scopd去掉
    .swiper-pagination-bullet-active {
      border: 1px solid #000002;
      // background: #C69C6D !important;
      background: #000002;
    }
  }

  /*home主要内容 */
  .home-content {
    margin: 0 0.2rem;
    /*活动的权益列表*/
    // bug:字体颜色不生效?
    .rights-box {
      
      overflow: hidden;
      text-align: center;
      margin: 0.09rem 0;
      height: 0.36rem;
      line-height: 0.36rem;
      color: #442818;
      display: flex;
      
      li {
        width: 33%;
        font-size: 0.18rem;
        color: #442818 ;
        vertical-align: middle;
        display: inline-block;
        text-align: center;
        .home-icon {
          display: inline-block;
          vertical-align: middle;
          background: url("../../public/img/home-icon.png") 0 -15px no-repeat;
          background-size: 90px auto;
          width: 0.28rem;
          height: 0.28rem;
          margin-top: -2px;
          margin-right: 0.05rem;
        }
      }
    }
    /* 商品菜单 */
    .menu-box {
      display: flex;
      li {
        width: 25%;
        //text-align: center;
        font-size: .28rem;
        margin: 0.1rem;
        a:visited,a:link,a:hover,a:active,a {
          text-align: center;
          color: #000002;
          img {
            width: 1rem;height: 1rem;
            display: block;
            margin: auto;
          }
        }
      }
    }
    /* 具体商品列表 */
    .mould-goods {
      padding-top: 0.1rem;
      .mounld-goods-content {
        border-top: 1px solid #e5e5e5;
        /*题头h3 */
        .title-goods {
          padding-top: 0.1rem;
          //display: flex;
          text-align: left;
          span{
            height: 0.2rem;
            font-size: .24rem;
            background-color: #fae8dc;
            border-radius: .1rem;
          }
          a{
            float: right;
            color: #999;
            font-size: .2rem;

            i{
              vertical-align: middle;
              font-size: .12rem;
              margin-bottom: .05rem;
              display: inline-block;
            }
          }
        }
        /* 商品ul */
        ul{
          margin-top: .1rem;
          li{
            border: 1px solid #F2EAE4;
            box-shadow: .1rem .1rem .12rem 0 rgba(0,0,0,0.06);
            border-radius: 5px;
            overflow: hidden;
            margin-bottom: .2rem;
            /* 商品图片*/
            a{
              cursor: pointer;
              //color: #442818;
              
              img{
                width: 100%;border: 0;
                }
            }
            /* 商品具体信息*/
            /* bug 文本内容居中,还是左对齐?*/
            .bottom-priceCart{
              position: relative;
              padding-bottom: .14rem;
              text-align: left;
              a{
                h4{
                  color: #a6a6a6;
                  margin: .2rem .2rem 0 .2rem;

                  span{
                    display: inline-block;
                    vertical-align: middle;
                    font-size: .3rem;
                  }
                  .title{
                        font-weight: bold;
                        color: #322418;
                        margin-right: .2rem;
                  }
                  .price{
                    color:#c69c6d;
                    
                  }
                  span:nth-child(3){
                    font-size:.24rem;
                  }
                }
                p{
                  height: 0.34rem;
                  line-height: .34rem;
                  margin: .14rem 0 0 .2rem;
                  color:#442818;
                }
              }
              button{
                position: absolute;
                right: .2rem;
                bottom: .2rem;
                border: 0;
                background: 0;
                .iconfont{
                  width: 0.9rem;
                  height: 0.9rem;
                  line-height: 0.9rem;
                  display: inline-block;
                  vertical-align: middle;
                  color: #442818;
                }
              }
            }
          }
        }
      }
    }
    /* 进行活动内容*/ 
    .home-activity{
      h3{
        text-align: center;
        margin-bottom: .3rem;
        span{
          height: 0.4rem;
          display: inline-block;
          color: #322418;
          font-size: .24rem;
          background: #F4EBE2;
          border-radius: 2rem;
          padding: 0 .2rem;
          line-height: .4rem;
        }
      }
      .home-activity-box{
        a{
          height: auto;
          width: 100%;
          display: flex;
          .left-text{
            width: 40%;
            color: #442818;
            text-align: left;
            h6{
              margin-top: .24rem;
              padding: 0 .2rem;
              line-height: .44rem;
              height: 0.44rem;
              font-size: .3rem;
            }
            p{
                  font-size: .24rem;
                  color: #999;
                  height: 1.4rem;
                  background: #fff;
                  padding: 0 .2rem;
            }
            span{
                    font-size: .26rem;
                    color: #C2A185;
                    display: block;
                    padding-left: .2rem;
                    margin-top: .2rem;
            }
          }
          .right-img{
             width: 60%;
            img{
                width: 100%;
                min-height: 2.72rem;
                background: #eee;
                border-radius: 0 .05rem .05rem 0;
            }
          }
        }
      }
    }

  }
  
    /*底部内容*/
    .lost-bottom {
      width: 100%;
      p{
        height: 1.4rem;
        line-height: 1.4rem;
        margin: 0 .4rem;
        text-align: right;
        padding-right: .8rem;
        padding-top: .5rem;
        background:url("../../public/img/list-empty.png") no-repeat right center;
        background-size: .68rem .76rem;
      }
    }
}
</style>


