<template>
  <div id="sort">
    <div class="products-nav-list">
      <!-- <ul>
                <li></li>
      </ul>-->
      <van-tabs v-model="active" sticky swipeable>
        <van-tab title="蛋糕">
          <div class="list-pro-box">
            <div class="pro-list-title" id="list-box-1">
              <h2>
                蛋糕
                <span>新鲜乳脂奶油蛋糕</span>
              </h2>
            </div>
            <div class="list-box">
              <ul>
                <!-- id=list-goods-12 -->
                <li id="list-goods-12">
                  <div class="list-pro-content">
                    <a href>
                      <div class="list-pro-img">
                        <img class="lazy" src="../../public/img/sort1.jpg" alt />
                      </div>
                      <h3>
                        Bailey's Love Triangles
                        <span>百利甜情人</span>
                      </h3>
                      <span class="price">¥298.00/2.0磅</span>
                      <div class="label">
                        <img src="../../public/img/label1.png" alt />
                      </div>
                    </a>
                    <a href="javascript:void(0);" class="cart-add">
                      <img src="../../public/img/list-cart.png" alt />
                    </a>
                  </div>
                </li>
                <!-- id=list-goods-17 -->
                <li id="list-goods-17">
                  <div class="list-pro-content">
                    <a href>
                      <div class="list-pro-img">
                        <img class="lazy" src="../../public/img/sort1.jpg" alt />
                      </div>
                      <h3>
                        Bailey's Love Triangles
                        <span>百利甜情人</span>
                      </h3>
                      <span class="price">¥298.00/2.0磅</span>
                      <div class="label">
                        <img src="../../public/img/label1.png" alt />
                      </div>
                    </a>
                    <a href="javascript:void(0);" class="cart-add">
                      <img src="../../public/img/list-cart.png" alt />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <!-- <div class="pro-list-title" id="list-box-out"></div> -->
            <ul></ul>
            <div class="lost-bottom">
              <p>没了</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="面包">
          <div class="list-pro-box">
            <div class="pro-list-title" id="list-box-1">
              <h2>
                面包
                <span>面包</span>
              </h2>
            </div>
            <div class="list-box">
              <ul>
                <!-- id=list-goods-12 -->
                <li id="list-goods-12">
                  <div class="list-pro-content">
                    <a href>
                      <div class="list-pro-img">
                        <img class="lazy" src="../../public/img/sort2.jpg" alt />
                      </div>
                      <h3>
                        <span>核桃派（京沪杭满39元包邮）</span>
                      </h3>
                      <span class="price">¥18.80/一份</span>
                      <div class="label">
                        <img src="../../public/img/label1.png" alt />
                      </div>
                    </a>
                    <a href="javascript:void(0);" class="cart-add">
                      <img src="../../public/img/list-cart.png" alt />
                    </a>
                  </div>
                </li>
                <!-- id=list-goods-17 -->
                <li id="list-goods-17">
                  <div class="list-pro-content">
                    <a href>
                      <div class="list-pro-img">
                        <img class="lazy" src="../../public/img/sort2.jpg" alt />
                      </div>
                      <h3>
                        <span>北海道吐司（4片/京沪杭满39元包邮</span>
                      </h3>
                      <span class="price">¥13.80/一份</span>
                      <div class="label">
                        <img src="../../public/img/label1.png" alt />
                      </div>
                    </a>
                    <a href="javascript:void(0);" class="cart-add">
                      <img src="../../public/img/list-cart.png" alt />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <!-- <div class="pro-list-title" id="list-box-out"></div> -->
            <ul></ul>
            <div class="lost-bottom">
              <p>没了</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="冰淇淋">
          <div class="list-pro-box">
            <div class="pro-list-title" id="list-box-1">
              <h2>
                冰淇淋
                <span>10天生命的意式杰拉朵冰淇淋</span>
              </h2>
            </div>
            <div class="list-box">
              <ul>
                <!-- id=list-goods-467 -->
                <li id="list-goods-467">
                  <div class="list-pro-content">
                    <a href>
                      <div class="list-pro-img">
                        <img class="lazy" src="../../public/img/sort3.jpg" alt />
                      </div>
                      <h3>
                        Litchi Gelato
                        <span>荔枝冰淇淋</span>
                      </h3>
                      <span class="price">¥45.00/盒</span>
                      <div class="label">
                        <img src="../../public/img/label1.png" alt />
                      </div>
                    </a>
                    <!-- 下面这个标签是没有的 -->
                    <a href="javascript:void(0);" class="cart-add">
                      <img src="../../public/img/list-cart.png" alt />
                    </a>
                  </div>
                </li>
                <!-- id=list-goods-17 -->
                <li id="list-goods-156">
                  <div class="list-pro-content">
                    <a href>
                      <div class="list-pro-img">
                        <img class="lazy" src="../../public/img/sort1.jpg" alt />
                      </div>
                      <h3>
                        Milk Gelato
                        <span>原味牛乳冰淇淋</span>
                      </h3>
                      <span class="price">¥45.00/盒</span>
                      <div class="label">
                        <img src="../../public/img/label1.png" alt />
                      </div>
                    </a>
                    <!-- 下面这个标签是没有的 -->
                    <a href="javascript:void(0);" class="cart-add">
                      <img src="../../public/img/list-cart.png" alt />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <!-- <div class="pro-list-title" id="list-box-out"></div> -->
            <ul></ul>
            <div class="lost-bottom">
              <p>没了</p>
            </div>
          </div>
        </van-tab>

        <van-tab title="下午茶">
          <div class="list-pro-box">
            <div class="pro-list-title" id="list-box-1">
              <h2>
                下午茶
                <span>咖啡下午茶</span>
              </h2>
            </div>
            <div class="list-box">
              <ul>
                <!-- id=list-goods-1101 -->
                <li id="list-goods-1101">
                  <div class="list-pro-content">
                    <a href>
                      <div class="list-pro-img">
                        <img class="lazy" src="../../public/img/sort4.jpg" alt />
                      </div>
                      <h3>
                        <span>小切块-芒果奶油蛋糕</span>
                      </h3>
                      <span class="price">¥36.00/份</span>
                      <div class="label">
                        <img src="../../public/img/label1.png" alt />
                      </div>
                    </a>
                    <a href="javascript:void(0);" class="cart-add">
                      <img src="../../public/img/list-cart.png" alt />
                    </a>
                  </div>
                </li>
                <!-- id=list-goods-1102 -->
                <li id="list-goods-1102">
                  <div class="list-pro-content">
                    <a href>
                      <div class="list-pro-img">
                        <img class="lazy" src="../../public/img/sort1.jpg" alt />
                      </div>
                      <h3>
                        <span>小切块-（新）杰瑞</span>
                      </h3>
                      <span class="price">¥36.00/份</span>
                      <div class="label">
                        <img src="../../public/img/label1.png" alt />
                      </div>
                    </a>
                    <a href="javascript:void(0);" class="cart-add">
                      <img src="../../public/img/list-cart.png" alt />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <!-- <div class="pro-list-title" id="list-box-out"></div> -->
            <ul></ul>
            <div class="lost-bottom">
              <p>没了</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="设计师专区">
          <div class="list-pro-box">
            <div class="pro-list-title" id="list-box-1">
              <h2>
                设计师
                <span>设计师礼品专区</span>
              </h2>
            </div>
            <div class="list-box">
              <ul>
                <!-- id=list-goods-12 -->
                <li id="list-goods-12">
                  <div class="list-pro-content">
                    <a href>
                      <div class="list-pro-img">
                        <img class="lazy" src="../../public/img/sort5.jpg" alt />
                      </div>
                      <h3>
                        <span>Ｆｏｒｅｖｅｒ21（生日包）</span>
                      </h3>
                      <span class="price">¥28.00/个</span>
                      <div class="label">
                        <img src="../../public/img/label1.png" alt />
                      </div>
                    </a>
                    <!-- 下面这个标签是没有的 -->
                    <a href="javascript:void(0);" class="cart-add">
                      <img src="../../public/img/list-cart.png" alt />
                    </a>
                  </div>
                </li>
                <!-- id=list-goods-17 -->
                <li id="list-goods-17">
                  <div class="list-pro-content">
                    <a href>
                      <div class="list-pro-img">
                        <img class="lazy" src="../../public/img/sort5.jpg" alt />
                      </div>
                      <h3>
                        Paper fan
                        <span>设计师竹纸扇</span>
                      </h3>
                      <span class="price">¥38.00/把</span>
                      <div class="label">
                        <img src="../../public/img/label1.png" alt />
                      </div>
                    </a>
                    <!-- 下面这个标签是没有的 -->
                    <a href="javascript:void(0);" class="cart-add">
                      <img src="../../public/img/list-cart.png" alt />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <!-- <div class="pro-list-title" id="list-box-out"></div> -->
            <ul></ul>
            <div class="lost-bottom">
              <p>没了</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="企业定制">
          <div class="list-pro-box">
            <div class="pro-list-title" id="list-box-1">
              <h2>
                企业定制
                <span>专属定制</span>
              </h2>
            </div>
            <div class="list-box">
              <ul>
                <!-- id=list-goods-12 -->
                <li id="list-goods-12">
                  <div class="list-pro-content">
                    <a href>
                      <div class="list-pro-img">
                        <img class="lazy" src="../../public/img/sort6.jpg" alt />
                      </div>
                      <h3>
                        黑白巧克力慕斯(可撒粉)
                        <span>把企业'蛋糕'做大！21cake黑白巧克力慕斯蛋糕,目前可做到90磅订制（送庆典图案及企业logo撒粉裱花。）</span>
                      </h3>
                      <span class="price">¥1500/10.0磅</span>
                      <div class="label">
                        <img src="../../public/img/label1.png" alt />
                      </div>
                    </a>
                    <a href="javascript:void(0);" class="cart-add">
                      <img src="../../public/img/list-cart.png" alt />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <!-- <div class="pro-list-title" id="list-box-out"></div> -->
            <ul></ul>
            <div class="lost-bottom">
              <p>没了</p>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab).use(Tabs);
export default {
  name: "sort",
  data() {
    return {
      active: 0,
      swipeable: true,
      sticky: true,

      list: [
        { title: "蛋糕" },
        { title: "面包" },
        { title: "冰淇淋" },
        { title: "下午茶" },
        { title: "设计师专区" },
        { title: "企业定制" }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#sort {
  width: 100%;
  margin-top: 0.96rem;
  margin-bottom: 0.91rem;

  /deep/.products-nav-list {
    // 问题bug : 结构还是不对,使用overflow 才去掉多余的部分
    display: flex;
    overflow: hidden;

    //height: 0.8rem;
    /deep/.van-tabs--line {
      width: 7.5rem;
      height: auto;
      //内容nav van-tabs__wrap--scrollable van-hairline--top-bottom
      /deep/.van-tabs__nav {
        display: flex;
        //width: 7.5rem;

        /deep/.van-tab,
        .van-tab--active {
          height: 0.8rem;
          line-height: 0.8rem;
          text-align: center;
          span {
            width: 1.6rem;
            display: block;
          }
        }
      }
    }

    // 主要内容
    /deep/.van-tabs__content {
      .van-tab__pane {
        .list-pro-box {
          .pro-list-title {
            text-align: center;
            h2 {
              padding: 0.16rem 0;
              font-size: 0.3rem;
              height: 0.6rem;
              line-height: 0.3rem;
              border-bottom: 1px solid #e9e9e9;
              span {
                font-size: 0.2rem;
                display: block;
                line-height: 0.26rem;
                margin-top: 2px;
                color: #d5bfa7;
              }
            }
          }
          //商品内容
          .list-box {
            padding-left: 0.1rem;
            padding-right: 0.4rem;
            ul {
              overflow: hidden;
              margin-bottom: 0.4rem;
              display: flex;
              flex-wrap: wrap;

              li {
                width: 50%;
                .list-pro-content {
                  position: relative;
                  padding-left: 0.3rem;
                  a {
                    display: block;
                    overflow: hidden;
                    text-align: left;
                    color: #111;
                    .list-pro-img {
                      height: 3.52rem;
                      img {
                        width: 100%;
                        border: 0;
                      }
                    }
                    h3 {
                      font-size: 13px;
                      line-height: 1.2em;
                      width: 100%;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      span {
                        font-size: 0.24rem;
                        display: block;
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                      }
                    }
                    .price {
                      color: #bb9772;
                      display: block;
                      margin-top: 0.1rem;
                    }
                    .label {
                      position: absolute;
                      left: 0.3rem;
                      top: 0;
                      img {
                        width: 0.8rem;
                      }
                    }
                  }
                  .cart-add {
                    position: absolute;
                    right: 0;
                    bottom: 0.06rem;
                    width: 0.44rem;
                    height: 0.44rem;
                    img {
                      width: 100%;
                      border: 0;
                    }
                  }
                }
              }
            }
          }
          /*底部内容*/
          .lost-bottom {
            width: 100%;
            p {
              height: 1.4rem;
              line-height: 1.4rem;
              margin: 0 0.4rem;
              text-align: right;
              padding-right: 0.8rem;
              padding-top: 0.5rem;
              background: url("../../public/img/list-empty.png") no-repeat right
                center;
              background-size: 0.68rem 0.76rem;
            }
          }
        }
      }
    }
  }
}

/**
      .van-tab{
                color: #fff;
            }
            .van-tabs__nav{
                background-color: rgba(0,2,2,0);
            }
            .van-hairline--top-bottom::after{
                border-width: 0px 0;
            }
            .van-tab--active{
                   color: #fff;
                   font-size: .8rem;
               }
*/
/*
    /deep/.van-tabs--line{
        width: 7.5rem;
        height: auto;
       //内容nav van-tabs__wrap--scrollable van-hairline--top-bottom
           /deep/.van-tabs__nav{
            display: flex;
            //width: 7.5rem;
           
               /deep/.van-tab ,.van-tab--active{
                  height: .8rem;
                  line-height: 0.8rem;
                   text-align: center;
                   span{
                       width: 1.6rem;
                       display: block;
                   }
                
               }
          
           }}
           
*/
</style>