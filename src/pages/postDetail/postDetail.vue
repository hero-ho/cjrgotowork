<template>
  <div>
    <holder></holder>
    <div class="job-detail-wrap">
      <div class="job-detail-header">
        <div class="job-name-detail">
          <div class="job-name-left">
            <div class="release-time">发布于 2018-8-7 13:22</div>
            <div class="job-name"><span class="name">车间勤杂工</span><label class="salary">2k-3k</label></div>
            <div class="company-name">温州雪凝引物有限公司</div>
          </div>
          <div class="job-name-right">
            <el-button class="resume">投递简历</el-button>
            <div class=""></div>
          </div>
        </div>
      </div>
      <div class="job-detail-body">

      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import Vue from 'vue'
import holder from '@/components/header/header'
import foot from '@/components/footer/footer'
import { Button } from 'element-ui'

Vue.use(Button)

export default {
  name: 'postDetail',
  components: {
    holder,
    foot
  },
  data () {
    return {
      msg: '当前是职位详情页面'
    }
  }
}
</script>
<style lang="less" scoped>
  .job-detail-header {
    background-color: #303a40;
    .job-name-detail {
      width: 1200px;
      height: 170px;
      margin: 0 auto;
      overflow: hidden;
      .job-name-left {
        width: 50%;
        float: left;
        .release-time {
          padding-top: 50px;
          color: #cccccc;
          font-size: 12px
        }
        .job-name {
          margin-top: 17px;
          color: #ffffff;
          line-height: 24px;
          .name {
            vertical-align: top;
            font-size: 24px;
          }
          .salary {
            vertical-align: middle;
            margin-left: 10px;
            border-radius: 10px;
            background-color: #f46d43;
            font-size: 14px;
            padding: 0 10px
          }
        }
        .company-name {
          margin-top: 20px;
          color: #ffffff;
          font-size: 14px
        }
      }
      .job-name-right {
        text-align: right;
        width: 50%;
        float: right;
        .resume {
          margin-top: 70px;
          width: 150px;
          height: 40px;
          background-color: #ff9d00;
          color: #ffffff;
          font-size: 14px;
          border-color: #ff9d00
        }
      }
    }
  }
</style>
