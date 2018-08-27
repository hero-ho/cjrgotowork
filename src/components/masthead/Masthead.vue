<template>
  <div class="banner">
    <form action="get">
      <el-row>
        <el-col span="4">
          <el-select v-model="value" placeholder="找工作">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col span="14">
          <el-input
            class-name="keywords"
            placeholder="输入关键字搜索"
            v-model="keywords"
            clearable>
          </el-input>
        </el-col>
        <el-col span="6">
          <el-button native-type='submit'>搜索</el-button>
        </el-col>
      </el-row>
    </form>
  </div>
</template>

<script>
import { Row, Select, Option, Input, Col, Button } from 'element-ui'
import Vue from 'vue'
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Row)
Vue.use(Button)
Vue.use(Col)

export default {
  name: 'Masthead',
  data() {
    return {
      options: [
        {
          value: 'jobs',
          label: '找工作'
        },
        {
          value: 'hire',
          label: '招聘'
        }
      ],
      value: '找工作',
      keywords: ''
    }
  }
}
</script>

<style lang="less" scoped>
.banner /deep/ .el-button {
  width: 100%;
  height: 55px;
  padding-left: 50px;
  border: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: #303a40;
  position: relative;
  color: #ffffff;
  font-size: 20px;
  &::before {
    content: '';
    position: absolute;
    top: 12.5px;
    left: 38px;
    display: block;
    height: 30px;
    width: 30px;
    background-image: url('../../assets/images/sprite.png');
    background-position: -67px 0;
  }
}
.banner /deep/ .el-input__inner {
  height: 55px;
  outline: none;
  border: none;
  color: #999;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  &[class-name="keywords"] {
    border-left: 2px solid #303a40;
    border-radius: 0;
  }
}
.banner {
  height: 500px;
  background-image: url('../../assets/images/banner3.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  form {
    width: 670px;
    margin-bottom: 20px;
    border-radius: 5px;
    .el-button {
      img {
        height: 30px;
        width: 30px;
      }
    }
  }
}
</style>
