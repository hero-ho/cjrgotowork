<template>
  <div class="jobList">
    <div class="heading">
          <div class="title-wrapper">
            <p class="title">全职</p>
            <p class="description">目前仅发布全职招聘</p>
          </div>
          <div class="city">
            <div class="icon"></div>
            <el-cascader
              placeholder="请选择城市"
              :options="province"
              @change="handleChange"
              >
            </el-cascader>
            <el-select v-model="currentDistrict" filterable placeholder="工作地区">
              <el-option
                v-for="item in districts"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </div>
    </div>
    <div @click=toggleActive($event) class="sort">
      <span data-sort="date" class="active">发布时间</span>
      <span data-sort="popularity">热度</span>
    </div>
  </div>
</template>

<script>
import { Row, Col, Select, Option, Cascader } from 'element-ui'
import Vue from 'vue'
import { province } from './provinces'
import { cities } from './cities'
import { districts } from './districts'
Vue.use(Cascader)
Vue.use([Row, Col, Select, Option])

export default {
  name: 'JobList',
  created() {
    this.province = province.map(e => {
      return {
        value: e.code,
        label: e.name,
        children: this.cities
          .filter(city => {
            return city.provinceCode === e.code
          })
          .map(el => {
            return {
              label: el.name,
              value: el.code
            }
          })
      }
    })
  },
  data() {
    return {
      province,
      districts,
      cities,
      currentDistrict: '',
      cityCode: '',
      sortBy: 'date' // date and popularity
    }
  },
  methods: {
    toggleActive(e) {
      if (e.target.nodeName === 'SPAN') {
        Array.from(e.currentTarget.querySelectorAll('span')).forEach(e => {
          e.classList.toggle('active')
        })
        this.sortBy = e.target.dataset.sort;
        console.dir(this.sortBy)
      }
    },
    handleChange(value) {
      this.cityCode = value[1]
      console.log(this.cityCode)
      this.districts = districts.filter(e => {
        return e.cityCode === this.cityCode
      })
      console.log(this.districts)
    }
  }
}
</script>

<style lang="less" scoped>
.jobList {
  width: 1200px;
  margin: 0 auto;
}
.sort {
  border-bottom: 6px solid #ff9500;
  margin-bottom: 20px;
  span {
    display: inline-block;
    height: 44px;
    font-size: 14px;
    color: #333;
    width: 120px;
    line-height: 44px;
    text-align: center;
    cursor: pointer;
  }
  span.active {
    background-color: #ff9500;
    color: white;
  }
}
.heading {
  width: 100%;
  position: relative;
  .city {
    position: absolute;
    bottom: 30px;
    display: flex;
    width: 280px;
    justify-content: space-between;
    align-items: center;
    .icon {
      height: 28px;
      width: 21px;
      background-image: url('../../assets/images/sprite.png');
    }
    & /deep/ .el-input__inner {
      width: 120px;
    }
  }
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
