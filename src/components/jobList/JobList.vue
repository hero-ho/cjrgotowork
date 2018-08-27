<template>
  <div class="jobList">
    <div class="heading">
          <div class="title-wrapper">
            <p class="title">全职</p>
            <p class="description">目前仅发布全职招聘</p>
          </div>
          <div class="city">
            <div class="icon"></div>
          </div>
    </div>
    
  </div>
</template>

<script>
import { Row, Col } from 'element-ui'
import Vue from 'vue'

Vue.use([Row, Col])

export default {
  name: 'JobList'
}
</script>

<style lang="less" scoped>
.jobList {}
.heading {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  .title-wrapper {
    padding: 60px 0 37px 0;
    text-align: center;
    .title {
      font-size: 30px;
      color: #333;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before {
        content: '';
        display: block;
        width: 150px;
        border: 1px solid #ff9500;
        height: 0px;
        margin-right: 20px;
      }
      &::after {
        content: '';
        display: block;
        width: 150px;
        border: 1px solid #ff9500;
        height: 0px;
        margin-left: 20px;
      }
    }
    .description {
      color: #333;
      font-size: 14px;
    }
  }
}
</style>
