<template>
  <div>
    <holder></holder>
    <div class="tab-wrap">
      <div class="tab-content">
        <el-tabs :tab-position="tabPosition" v-model="activeName">
          <el-tab-pane label="关于我们" name="first">
            <div class="content">
              <div class="head">关于我们</div>
              <div class="statement">关于我们</div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="加入我们" name="second">
            <div class="content">
              <div class="head">加入我们</div>
              <div class="statement">加入我们</div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="网站声明" name="third">
            <div class="content">
              <div class="head">网站声明</div>
              <div class="statement">网站声明</div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import Vue from 'vue'
import holder from '@/components/header/header'
import foot from '@/components/footer/footer'
import { Tabs } from 'element-ui'

Vue.use(Tabs)

export default {
  name: 'about',
  components: {
    foot,
    holder
  },
  data () {
    return {
      tabPosition: 'left',
      activeName: 'first'
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  .tab-wrap {
    background-color: #eeeeee;
    .tab-content {
      width: 1200px;
      margin: 0 auto;
      padding-top: 30px;
      padding-bottom: 60px;
      .content {
        .head {
          height: 50px;
          line-height: 50px;
          border-bottom: 2px solid #eeeeee;
          font-size: 14px;
          padding-left: 32px;
        }
        .statement {
          padding: 30px;
          font-size: 12px;
        }
      }
    }
  }
</style>
// 重写element-ui
<style lang="less">
  .tab-content {
    .el-tabs__item:hover {
      color: #333333
    }
    .el-tabs--left .el-tabs__active-bar.is-left {
      left: 0;
      right: auto;
      background-color: #ff6000;
      color: #333333
    }
    .el-tabs__item.is-active {
      color: #333333
    }
    .el-tabs--left .el-tabs__item.is-left {
      min-width: 200px;
      text-align: left;
      line-height: 52px;
      height: 52px;
      background-color: white;
      border-bottom: 1px solid #eeeeee;
    }
    .el-tabs__active-bar {
       background-color: white;
     }
    .el-tabs__content {
      min-height: 700px;
      background-color: white;
    }
    .el-tabs--left .el-tabs__header.is-left {
      margin-right: 20px
    }
  }
</style>
