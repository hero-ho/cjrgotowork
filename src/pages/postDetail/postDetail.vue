<template>
  <div>
    <holder></holder>
    <div class="job-detail-wrap">
      <div class="job-detail-header">
        <div class="job-name-detail">
          <div class="job-name-left">
            <div class="release-time">发布于 {{ job.createTime }}</div>
            <div class="job-name"><span class="name">{{ job.title }}</span><label class="salary">{{ job.money }}</label></div>
            <div class="company-name">{{ job.jobRecruiterName }}</div>
          </div>
          <div class="job-name-right">
            <el-button class="resume">投递简历</el-button>
            <div class="function-btn">
              <el-button type="text" icon="el-icon-star-off">收藏</el-button>
              <el-button type="text" icon="el-icon-warning">报错</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="job-detail-body">
        <div class="detail-left-wrap">
          <div class="com-detail">
            <div class="detail-top">
              <div class="detail-wrap">
                <label class="name">福利</label>
                <div class="detail"><el-tag>{{ job.welfare }}</el-tag></div>
              </div>
              <div class="detail-wrap">
                <label class="name">要求</label>
                <div class="detail">{{ job.demandEducation }} | {{ job.demandExperience }} | 男性 | {{ job.demandAge }}岁</div>
              </div>
              <div class="detail-wrap">
                <label class="name">地点</label>
                <div class="detail">{{ job.jobCityName }} （{{ job.location }}）</div>
              </div>
              <div class="detail-wrap">
                <label class="name">人数</label>
                <div class="detail">{{ job.peopleNum }}人</div>
              </div>
            </div>
            <div class="detail-bottom">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="职位描述" name="first">
                  <ul class="job-intro">
                    <li v-for="(intro, index) in job.jobContent">{{ index+1 + "." +  intro }}</li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="公司简介" name="second">
                  <ul class="job-intro">
                    <li>{{ job.introduction }}</li>
                  </ul>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
          <div class="other-job">123</div>
        </div>
        <div class="detail-right-wrap">
          <div class="hot-jobs">123</div>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import holder from '@/components/header/header'
import foot from '@/components/footer/footer'
import { Button, Tag, Tabs, TabPane } from 'element-ui'

Vue.use(Button)
Vue.use(Tag)
Vue.use(TabPane)
Vue.use(Tabs)

export default {
  name: 'postDetail',
  components: {
    holder,
    foot
  },
  data () {
    return {
      msg: '当前是职位详情页面',
      activeName: 'first',
      job: {}
    }
  },
  created () {
    axios.get('/static/mock/job.json').then((res) => {
      this.job = res.data.job;
      this.handleClick()
    })
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab)
    }
  }
}
</script>
<style lang="less" scoped>
  .job-detail-wrap {
    background-color: rgb(238, 238, 238);
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
          .function-btn{
            button {
              width: 75px;
              margin: 0;
              color: white
            }
          }
        }
      }
    }
    .job-detail-body {
      width: 1200px;
      margin: 0 auto;
      padding-top: 10px;
      overflow: hidden;
      .detail-left-wrap {
        width: 800px;
        float: left;
        .com-detail {
          min-height: 640px;
          background-color: white;
          padding: 10px;
          .detail-top {
            .detail-wrap {
              margin-bottom: 17px;
              font-size: 0;
              .name {
                margin-right: 10px;
                font-size: 14px;
                color: #333333;
              }
              .detail {
                display: inline-block;
                font-size: 14px;
                .el-tag {
                  margin-right: 10px;
                  padding: 0 5px;
                  height: 22px;
                  line-height: 22px;
                  border-radius: 8px;
                  color: #333333;
                  border-color: #f46d43;
                  background-color: white
                }
              }
            }
          }
          .detail-bottom {
            .job-intro {
              li {
                margin-bottom: 10px;
                &:last-child {
                  margin-bottom: 0
                }
              }
            }
          }
        }
        .other-job {
          margin-top: 10px;
          background-color: white;
        }
      }
      .detail-right-wrap {
        width: 380px;
        float: left;
        padding-left: 20px;
        .hot-jobs {
          background-color: white;
        }
      }
    }
  }
</style>
<!-- element-ui 重写 -->
<style lang="less">
  .detail-bottom {
    .el-tabs__nav-wrap::after {
      background-color: #ec4c48;
      height: 1px;
    }
    .el-tabs__item {
      &:hover {
        color: #333333
      }
    }
    .el-tabs__item.is-active {
      color: #333333;
    }
    .el-tabs__active-bar {
      background-color: #ec4c48
    }
    .el-tabs__content {
      padding: 0 20px;
      color: #333333;
      font-size: 14px
    }
  }
</style>
