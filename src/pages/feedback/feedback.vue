<template>
  <div>
    <holder></holder>
    <!--主题内容-->
    <el-container class="feedback">
      <!--反馈名称-->
      <el-aside class="feedback-left" style="width: 80px">
        <div class="feedback-type">反馈类型</div>
        <div class="feedback-content">反馈内容</div>
        <div class="feekback-phone">联系方式</div>
      </el-aside>
      <!--反馈内容-->
      <el-main class="feedback-right" style="padding: 0">
        <!--反馈类型（下拉选择，同时可以新增）-->
        <el-select v-model="value" placeholder="请选择" class="feedback-type">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <!--反馈内容，不能为空，为空则会返回提示框-->
        <el-input
          type="textarea"
          class="feedback-content"
          rows="23"
          placeholder="欢迎提出您在使用中遇到的问题或宝贵建议，感谢您对棒棒团的支持。"
          v-model="textarea">
        </el-input>

        <!--联系方式，字数限制为20-->
        <el-input v-model="input" placeholder="请留下您的联系方式，以便我们工作人员及时回复您"
                  class="feekback-phone" onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="20">
        </el-input>
        <div class="empty-textarea" v-if="isEmpty">请输入反馈内容!!!</div>
        <!--提交-->
        <el-footer>
          <el-button class="submit" @click="submit">提交</el-button>
        </el-footer>
      </el-main>

    </el-container>
    <foot></foot>
  </div>
</template>
<script>
  import holder from '@/components/header/header'
  import foot from '@/components/footer/footer'

  export default {
    name: 'feedback',
    components: {
      foot,
      holder
    },
    data() {
      return {
        value: '',
        textarea: '',
        input: '',
        isEmpty:false,
        options: [
          {
            value: "选项1",
            label: "使用帮助"
          },
          {
            value: "选项2",
            label: "问题反馈"
          },
          {
            value: "选项3",
            label: "优化建议"
          }
        ],
      }
    },
    methods: {

      submit() {
        //判断反馈内容是否存在，如果不存在则弹出提示信息
        if (!this.textarea) {
          //弹出提示信息
          this.isEmpty=true
        }else{
          //弹出感谢框
          // this.$confirm('感谢您的建议，您的支持就是我们继续前进的动力', {
          //   confirmButtonText: '确定',
          //   center: true
          // }).then(() => {
          //   this.$message({
          //     type: 'success',
          //   });
          // })

          this.$alert('感谢您的建议，您的支持就是我们继续前进的动力!', {
            confirmButtonText: '确定',
            center:true,
            callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${ action }`
              });
            }
          })
        }
      },

    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .feedback {
    width: 910px;
    height: 1020px;
    padding-top: 40px;

    position: relative;
    left: 460px;
    overflow: hidden;
    font-size: 16px;
    font-family: PingFangSC;
    /*左边*/
    .feedback-left {
      color: #333333;
      position: relative;
      /*反馈类型*/
      .feedback-type, .feedback-content, .feekback-phone {
        height: 40px;
        line-height: 40px;
      }
      /*反馈内容*/
      .feedback-content {
        margin-top: 20px;
      }
      /*联系方式*/
      .feekback-phone {
        margin-top: 490px;
      }
    }
    .feedback-right {
      position: relative;
      padding: 30px;

      /*反馈类型*/
      .feedback-type {
        width: 350px;
        border-radius: 5px;
        border: 1px solid #999999;
        background-color: #ffffff;
        margin-left: 30px;
      }
      /*反馈内容*/
      .feedback-content {
        margin-top: 20px;
        height: 500px;
        width: 800px;
        margin-left: 30px;
        font-size: 14px;
        color: #cccccc;
      }
      /*联系方式*/
      .feekback-phone {
        position: absolute;
        top: 590px;
        margin-left: 50px;
        width: 360px;
      }
      /*提交按钮*/
      .submit {
        width: 400px;
        height: 60px;
        display: block;
        margin: 100px auto;
        border-radius: 5px;
        background: #fe9401;
        font-family: PingFangSC;
        font-size: 24px;
        color: #ffffff;
      }

      /*内容为空时的样式*/
      .empty-textarea{
        margin-left: 30px;
        color: red;
      }
    }
  }


</style>
