<template>
  <div>
    <holder></holder>
    <!--主题内容-->
    <form action="">
      <div class="feedback">
        <!--反馈类型-->
        <div class="feedback-type">
          反馈类型：
          <select name="" id="" placeholder="请选择" class="feedback-type-select">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>
        <!--反馈内容-->
        <div class="feedback-contain">
          反馈内容： <input type="textarea" placeholder="欢迎提出您在使用过程中遇到的问题或宝贵建议，感谢您对棒棒团的支持" class="feedback-contain-textarea">
        </div>
        <!--联系方式-->
        <div class="feedback-relation">
          联系方式： <input type="text" placeholder="请留下您的联系方式，以便我们及时回复您。" class="feedback-relation-text">
        </div>
      </div>
    </form>
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
        msg: '当前是反馈页面'
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less" scoped>
  .feedback {
    width: 910px;
    height: 780px;
    border: 1px solid red;
    position: relative;
    left: 460px;
    top: 40px;
    overflow: hidden;
    font-size: 16px;
    font-family: PingFangSC;

  }
    .feedback-type {
      color: #333333;
      position: relative;
    }
      .feedback-type-select{
        position: relative;
        left: 30px;
        font-size: 14px;
        color: #cccccc;
        width: 350px;
        height: 40px;
        margin-bottom:20px
      }

    .feedback-contain {
      color: #333333;
      position: relative;
    }
      .feedback-contain-textarea{
        position: relative;
        left: 30px;
      }

    .feedback-relation {
      color: #333333;
      position: relative;
    }
      .feedback-relation-text{
        position: relative;
        left: 50px;
      }
</style>
