<template>
  <div>
    <!--  <holder></holder> -->
    <div class="container">
      <div class="content">

        <logo></logo>

        <el-form :model="form" :rules="rules" ref="form" class="demo-ruleForm form">
          <h1>登录</h1>
          <el-form-item prop="email">
            <el-input v-model.trim="form.email" @keyup.enter.native="submitForm('form')" class="username" placeholder="请输入手机号码 / 邮箱 / 用户名" type="text"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model.trim="form.password" @keyup.enter.native="submitForm('form')" class="password" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
          <div class="forget">
            <router-link to="/findpw">忘记密码？</router-link>
          </div>
          <el-form-item>
            <el-button :disabled="disabled" @click="submitForm('form')" class="enter" type="success">登录</el-button>
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
/* import rules from '../../assets/js/loginRules.js'自定义表单验证规则 */
import '../../assets/css/login.css' // 覆盖elementUI的样式
import Vue from 'vue'
/* import holder from '@/components/header/header' 头部 */
import foot from '@/components/footer/footer' // 脚部
import logo from '@/components/logo/logo' // logo组件
import { checkUser } from '@/axios' // 请求数据的方法
import { Form, FormItem, Input, Button, Message } from 'element-ui'
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
  created () {
    this.checkLogin()
  },
  data () {
    /* let usernameRules = rules.usernameRules 导入表单验证的方法 */
    return {
      form: {
        email: '',
        password: ''
      },
      disabled: false, // 按钮是否可以点击
      rules: {
        email: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6, max: 30, message: '长度应在 6 到 30 个字符', trigger: 'blur' }
          /* { validator: usernameRules, trigger: 'change' } 自定义表单验证规则 */
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 30, message: '长度应在 6 到 30 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // element 表单验证的方法
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) { // 表单验证成功
          this.disabled = true // 禁用按钮
          // 请求登录
          checkUser({params: this.form}).then(res => {
            console.log(res)
            if (res.status === 0) { // 登录成功
              localStorage.setItem('login', 'true')
              this.$router.push({ path: '/' })
              this.disabled = false // 开放按钮
            } else { // 登录失败
              Message({
                center: true,
                message: res.msg,
                type: 'error'
              })
              this.disabled = false // 开放按钮
            }
          })
        } else { // 表单验证失败
          console.log('非法提交')
          return false
        }
      })
    },
    checkLogin () {
      // 如果已经登录过就跳到首页
      if (localStorage.getItem('login') === 'true') {
        this.$router.push({path: '/'})
      }
    }
  }
}
</script>
<style lang="less" scoped>
@color: #ff6000;
.container::before {
  // 大背景遮罩
  content: '';
  width: 100%;
  min-width: 1200px;
  height: 450px;
  position: absolute;
  display: block;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.5);
}
.container {
  width: 100%;
  min-width: 1200px;
  height: 450px;
  position: relative;
  background: url('../../../src/assets/images/banner1.jpg') no-repeat center
    center / 100% 100%;
  .content {
    width: 100%;
    min-width: 1200px;
    margin: 0 auto;
    position: absolute;
    z-index: 2;
    .logo {
      margin: 30px auto 10px;
    }
    .form {
      width: 500px;
      height: 282px;
      border-top: 10px solid @color;
      margin: 0 auto;
      background-color: #fff;
      text-align: center;
      border-radius: 0 0 6px 6px;
      position: relative;
      h1 {
        text-align: center;
        font-size: 26px;
        font-weight: 600;
        letter-spacing: 3px;
        color: #ec4c48;
        margin: 15px 0;
      }
      .username,
      .password {
        width: 400px;
        height: 50px;
      }
      .username::before,
      .password::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 25px;
        top: 8px;
        left: 10px;
      }
      .username::before {
        background: url('../../assets/images/sprite.png') 46px -3px;
      }
      .password::before {
        background: url('../../assets/images/sprite.png') 21px -3px;
      }
      .forget {
        position: absolute;
        top: 182px;
        right: 58px;
        font-size: 14px;
        a {
          color: #3ca6fc;
        }
        a:hover {
          color: @color;
        }
      }
      .enter {
        width: 400px;
        height: 50px;
        color: #fff;
        font-size: 20px;
        margin-top: 14px;
      }
    }
    .register {
      text-align: center;
      font-size: 14px;
      color: #333;
      margin-top: 12px;
      a {
        color: @color;
      }
    }
  }
}
</style>
