<template>
  <div class="job-item">
    <div class="title">{{detail.title}}</div>
    <div class="info">
      <div class="detail">
        <span class="city">{{detail.jobCityName}}</span>
        <span class="experience">{{detail.demandExperience}}</span>
        <span class="perks" v-show="detail.welfare">{{detail.welfare}}</span>
      </div>
      <div class="company-name">{{detail.jobRecruiterName}}</div>
    </div>
    <div class="lower-detail">
      <span class="salary">{{detail.money}}</span>
      <span class="post-date">
        发布于{{convertToDate(detail.create_time)}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobItem',
  props: {
    detail: {
      type: Object
    }
  },
  methods: {
    convertToDate(ms) {
      let date = new Date(ms)
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    }
  }
}
</script>

<style lang="less" scoped>
.job-item {
  box-sizing: border-box;
  .lower-detail {
    align-items: baseline;
    position: absolute;
    bottom: 15px;
    left: 35px;
    width: 325px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: #333;
    .post-date {
      font-size: 12px;
      color: #aaaaaa;
    }
  }
  position: relative;
  margin: 10px 10px;
  height: 150px;
  border: 1px dashed #aaaaaa;
  width: 380px;
  padding: 15px;
  .title {
    font-size: 18px;
    font-weight: 600;
    font-family: PingFang-SC-Regular;
    text-align: left;
    color: #333;
    padding-bottom: 15px;
  }
  .info {
    padding: 0 20px 0 20px;
    .detail {
      padding-bottom: 10px;
      font-size: 14px;
      color: #aaaaaa;
      & > span {
        padding: 0 10px;
        border-left: 1px solid #aaaaaa;
      }
      & > span:first-child {
        padding-left: 0;
        border-left: 1px solid transparent;
      }
    }
    .company-name {
      color: #aaaaaa;
    }
  }
}
</style>
