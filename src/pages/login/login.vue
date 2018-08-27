<template>
  <div>
   <!--  <holder></holder> -->
    <div class="container">
      <div class="content">
        <logo></logo>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm form">
          <h1>登录</h1>
          <el-form-item prop="name">
            <el-input v-model="ruleForm.username" class="username"></el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input v-model="ruleForm.password" class="password"></el-input>
          </el-form-item>
          <div class="forget">
             <router-link to="/findpw">忘记密码？</router-link>
          </div>
          <el-form-item prop="name">
            <el-button type="success" class="enter">登录</el-button>
          </el-form-item>
        </el-form>
        <div class="register">
          <span>还没有账号？</span>
          <router-link to="/register">免费注册</router-link>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import Vue from 'vue'
/* import holder from '@/components/header/header' */
import foot from '@/components/footer/footer'
import logo from '@/components/logo/logo'
import { Form, FormItem, Input, Button } from 'element-ui'
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
export default {
  name: 'login',
  components: {
    foot,
    /* holder, */
    logo
  },
  data () {
    return {
      ruleForm: {
        user: '',
        password: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
.container::before{
  content: '';
  width: 100%;
  min-width: 1200px;
  height:  450px;
  position: absolute;
  display: block;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.5);
}
.container{
  width: 100%;
  min-width: 1200px;
  height: 450px;
  position: relative;
  background: url('../../../src/assets/images/banner1.jpg') no-repeat center center / 100% 100%;
  .content{
    width: 100%;
    min-width: 1200px;
    margin: 0 auto;
    position: absolute;
    z-index: 2;
    .logo{
      margin: 30px auto 10px;
    }
    .form{
      width: 500px;
      height: 282px;
      border-top: 10px solid #ff6000;
      margin: 0 auto;
      background-color: #fff;
      text-align: center;
      border-radius:0 0 6px 6px; 
      position: relative;
      h1{
        text-align: center;
        font-size: 26px;
        font-weight: 600;
        letter-spacing: 3px;
        color: #ec4c48;
        margin: 15px 0;
      }
      .username,
      .password{
        width: 400px;
        height: 50px;
      }
      .forget{
        position: absolute;
        top: 182px;
        right: 58px;
        font-size: 14px;
        a{
          color: #3ca6fc;
        }
      }
      .enter{
        background-color: #ff9500;
        border-color: #ff9500;
        width: 400px;
        height: 50px;
        color: #fff;
        font-size: 20px;
        margin-top: 14px;
      }
    }
    .register{
      text-align: center;
      font-size: 14px;
      color: #333;
      margin-top: 12px;
      a{
        color: #ff6000;
      }
    }
  }
}
</style>
