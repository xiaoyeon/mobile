<template>
    <div class="community">
        <!-- <van-tabs v-model="active">
            <van-tab v-for="(index) in list" :title="'快乐'+index" :key="index">
                内容 {{ index }}
            </van-tab>
            <van-tab></van-tab>
        </van-tabs> -->
        <div class="title">社区</div>
        <van-tabs v-model="active" swipe-threshold:value="4">
            <van-tab title="标签 1">内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
            <van-tab title="标签 5">内容 5</van-tab>
            <van-tab title="标签 6">内容 6</van-tab>
</van-tabs>
    </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);

    export default {
        data(){
            return{
                active:0,
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .community{
        width: auto;
        margin-top:.96rem ;
      .title{
           width: 7.5rem;
            height: 0.96rem;
            line-height: .96rem;
            text-align: center;
            font-size: .34rem;
      }
    }
</style>