<template>
  <div>
    <div class="register-container">
      <logo class="logo"></logo>
      <div class="form-container">
        <el-form :model="formData" class="register-form" :rules="registerRules" ref="formData">
          <h1>注册账号</h1>
          <el-form-item label="电子邮箱:" prop="email">
            <el-input type="email" class="input-box" v-model="formData.email" placeholder="请输入邮箱账户"></el-input>
          </el-form-item>
          <el-form-item label="登录密码:" prop="pass">
            <el-input type="password" class="input-box" v-model="formData.pass" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码:" prop="checkPass">
            <el-input type="password" class="input-box" v-model="formData.checkPass" placeholder="请确认密码"></el-input>
          </el-form-item>
        </el-form>
        <div class="user-protocol">点击注册表示你同意<a>&nbsp;《用户使用协议》&nbsp;</a></div>
        <el-button type="primary" class="submit-btn" @click="gotoRegister(formData)">立即注册</el-button>
      </div>
      <div class="goto-login">已有账号<router-link to="/login">立即登录</router-link></div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import { signUp, checkUser } from '@/axios/index'
import Vue from 'vue'
import foot from '@/components/footer/footer'
import logo from '@/components/logo/logo'
import { Form, FormItem, Input, Button, Message } from 'element-ui'
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)

export default {
  components: {
    foot,
    logo
  },
  name: 'register',
  data () {
    // 表单验证规则
    var checkEmail = (rule, value, callback) => {
      var reg = /^[a-zA-Z0-9_-]{1,20}@([a-zA-Z0-9]+\.)+[A-Za-z\d]{2,5}$/
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else if (!reg.test(value)) {
        callback(new Error('邮箱格式错误'))
      } else {
        callback()
      }
    }
    var codePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 6 || value.length > 20) {
        callback(new Error('请输入6-20位含数字及字母的密码'))
      } else if (value.search(/[0-9]/g) === -1 || value.search(/[a-zA-Z]/g) === -1) {
        callback(new Error('请输入6-20位含数字及字母的密码'))
      } else {
        if (this.formData.checkPass !== '') {
          this.$refs.formData.validateField('checkPass')
        }
        callback()
      }
    }
    var checkCodePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请确认密码'))
      } else if (value.length < 6 || value.length > 20) {
        callback(new Error('请输入6-20位含数字及字母的密码'))
      } else if (value.search(/[0-9]/g) === -1 || value.search(/[a-zA-Z]/g) === -1) {
        callback(new Error('请输入6-20位含数字及字母的密码'))
      } else if (value !== this.formData.pass) {
        callback(new Error('两次输入的密码不一致'))
      } else {
        callback()
      }
    }
    return {
      formData: {
        email: '',
        pass: '',
        checkPass: ''
      },
      registerRules: {
        email: [{validator: checkEmail, trigger: 'blur'}],
        pass: [{validator: codePass, trigger: 'blur'}],
        checkPass: [{validator: checkCodePass, trigger: 'blur'}]
      }
    }
  },
  methods: {
    // 注册功能
    async gotoRegister (formData) {
      this.$refs['formData'].validate(async (valid) => {
        if (valid) {
          console.log(this.formData.email)
          console.log(this.formData.pass)
          try {
            // 获取注册及登录接口所需信息
            const signUpInfo = {
              username: '',
              password: this.formData.pass,
              email: this.formData.email
            }
            const signInInfo = {
              email: this.formData.email, 
              password: this.formData.pass
            }
            // 请求注册接口
            const res = await signUp({params: signUpInfo})
            const data = res.data
            // 注册成功后请求登录接口
            if (data.status === 0) {
              Message({
                type: 'success',
                message: '注册成功'
              })
              // 发送登录请求
              const ress = await checkUser({params: signInInfo})
              console.log(ress.data)
              localStorage.setItem('login', 'true')
              this.$router.push('/selfcenter')
              // this.$router.push('/createresume')
            } else if (data.status === 1) {
              Message({
                type: 'error',
                message: '该邮箱已注册'
              })
            }
          } catch (e) {
            console.log(e)
            Message({
              type: 'error',
              message: e
            })
          }
        } else {
          Message({
            type: 'error',
            message: '请按要求填写注册信息'
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.register-container::before{
  content: '';
  width: 100%;
  min-width: 1200px;
  height: 780px;
  position: absolute;
  display: block;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.5);
}

.register-container {
  width: 100%;
  min-width: 1200px;
  height: 780px;
  position: relative;
  background: url('../../../src/assets/images/banner1.jpg') no-repeat center center / 100% 100%;
}

.logo {
  margin: 0 auto;
  top: 120px;
  height: 70px;
  width: 300px;
  position: relative;
  z-index: 2;
}

.form-container {
  margin: 0 auto;
  width: 500px;
  height: 428px;
  top: 150px;
  position: relative;
  z-index: 2;
  background: white;
  text-align: center;
  border-top: 10px solid #ff6000;
  border-radius: 5px;
}

.register-form {
  margin: 0 auto;
  width: 400px;
  text-align: center;
  border-radius:0 0 6px 6px;
  position: relative;
}

.register-container >>> .el-form-item__error {
  left: 74px!important;
}

h1{
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #ec4c48;
  margin: 15px 0;
  margin-bottom: 35px;
  padding-top: 5px;
}

.input-box {
  width: 325px;
  height: 50px;
}

.user-protocol {
  font-size: 12px;
  position: relative;
  top: 5px;
}

.user-protocol a {
  color: #74befb;
  cursor: pointer;
  text-decoration: underline;
}

.submit-btn {
  margin-top: 30px;
  background: #fe9401;
  border: none;
  width: 400px;
  font-size: 20px;
  font-weight: bold;
}

.goto-login {
  font-size: 14px;
  position: relative;
  top: 170px;
  z-index: 10;
  margin: 0 auto;
  text-align: center;
}

.goto-login a{
  text-decoration: underline;
  color: #ff6000;
  margin-left: 10px;
}
</style>
