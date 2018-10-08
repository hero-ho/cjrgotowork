export default {
  usernameRules: (rule, value, callback) => {
    if (/^(\w){6,30}$/.test(value)) {
      callback()
    } else {
      callback(new Error('用户名由6-30位的字母、数字和下划线组成'))
    }
  }
}
