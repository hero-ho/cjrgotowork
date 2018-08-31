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
              <el-tabs v-model="activeName">
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
          <div class="other-job">
            <div class="avatar">
              <img width="120px" height="120px" src="@/assets/images/hero.png">
            </div>
            <div class="content">
              <div class="name">{{ company.jobRecruiterName }}</div>
              <div class="intro">
                <div class="col-30">领域：{{ company.field }}</div>
                <div class="col-70">性质：{{ company.scale }}</div>
                <div class="col-30">规格：{{ company.nature }} 人</div>
                <div class="col-70">地点：{{ company.location}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="detail-right-wrap">
          <div class="hot-jobs">
            <div class="title">急招职位</div>
            <div class="job-list">
              <ul>
                <li v-for="job in cjobList">
                  <job-item :detail="job"></job-item>
                </li>
              </ul>
            </div>
          </div>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, next"
              :page-size="4"
              :total="jobList.length"
              prev-text="上一页"
              next-text="下一页"
              @current-change="handleCurrentChange">
            </el-pagination>
          </div>
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
import JobItem from '@/components/jobItem/JobItem'
import { Button, Tag, Tabs, TabPane, Pagination } from 'element-ui'

Vue.use(Button)
Vue.use(Tag)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Pagination)

export default {
  name: 'postDetail',
  components: {
    holder,
    foot,
    JobItem
  },
  data () {
    return {
      msg: '当前是职位详情页面',
      activeName: 'first',
      job: {},
      company: {},
      jobList: [],
      pageNum: 1,
      pageSize: 4
    }
  },
  computed: {
    cjobList () {
      return this.jobList.slice(4 * (this.pageNum - 1), this.pageNum * this.pageSize)
    }
  },
  created () {
    axios.get('/static/mock/job.json').then((res) => {
      this.job = res.data.job;
      this.jobList = res.data.jobList.list;
      this.company = res.data.company;
      this.pageNum = res.data.jobList.pageNum;
      this.pageSize = res.data.jobList.pageSize;
    })
  },
  methods: {
    // 获取当前页数跳转到指定页
    handleCurrentChange (val) {
      this.pageNum = val
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
          margin-bottom:10px;
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
          margin-bottom: 60px;
          padding: 16px 30px;
          background-color: white;
          overflow: hidden;
          .avatar {
            float: left;
          }
          .content {
            padding-left: 150px;
            .name {
              padding-top: 4px;
              padding-bottom: 17px;
              font-size: 18px;
              font-weight: 600;
              color: #333333
            }
            .intro {
              overflow: hidden;
              div {
                float: left;
                padding-top: 24px;
                font-size: 16px;
                &:first-child, &:nth-child(2) {
                  padding-top: 0
                }
              }
              .col-30 {
                min-width: 30%
              }
              .col-70 {
                width: 50%
              }
            }
          }
        }
      }
      .detail-right-wrap {
        width: 380px;
        float: left;
        padding-left: 20px;
        .hot-jobs {
          background-color: white;
          padding-top: 10px;
          padding-bottom: 1px;
          .title {
            font-size: 16px;
            font-weight: 600;
            text-align: center;
            padding-bottom: 10px
          }
        }
        .pagination {
          padding-top: 20px;
          text-align: center;
        }
      }
    }
  }
</style>
<!-- element-ui 重写  -->
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
  .pagination {
    .el-pagination {
      .btn-next, .btn-prev {
        width:70px;
        line-height: 30px;
        background: white;
      }
      .btn-next {
        margin-left: 100px
      }
    }
  }
  // jobItem 重写
  .job-item {
    width: 360px !important;
    .lower-detail {
      width: 305px !important
    }
  }
</style>
