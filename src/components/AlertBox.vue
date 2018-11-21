<template>
  <div class="alert-box" v-show="false">
    <div class="version" v-if="false">
      <h3 class="alert-title">版本信息</h3>
      <div class="version-info">
        <p>当前版本： {{ version }}}</p>
        <p>基于框架： {{ frame }}</p>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">主要按钮</el-button>
      </div>
      <h3 class="alert-title">关于版权</h3>
      <div class="version-about">
        <blockquote><a>welshineShop</a>为惠而信旗下的电子商城产品，所有版权归惠而信所有，不得恶意分享产品源代码、二次转售等，违者将承担相应的法律责任。
        </blockquote>
        <p>©2018 <a href="welshine.com版">welshine.com</a>版权所有</p>
      </div>
    </div>
    <div class="color-select" v-if="false">
      <h3 class="alert-title">配色方案</h3>
      <ul class="clearfloat">
        <li><span>点击换肤</span></li>
        <li class="bg-primary"><span>点击换肤</span></li>
        <li class="bg-primary"><span>点击换肤</span></li>
        <li class="bg-primary"><span>点击换肤</span></li>
        <li class="bg-primary"><span>点击换肤</span></li>
        <li class="bg-primary"><span>点击换肤</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertBox",
  data() {
    return {
      version: "welsine-V1.0.0",
      frame: "vue3.0"
    }
  }
}
</script>

<style scoped lang="scss">
.alert-box {
  z-index: 9999;
  position: fixed;
  right: 0; top: 60px !important;bottom: 0;
  width: 300px;
  background: #fff;
  box-shadow: 1px 1px 10px rgba(0,0,0,.1);
}
.alert-title {
  height: 40px;
  font-weight: 400;
  line-height: 40px;
  font-size: 14px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 10px;
}
.color-select {
  padding: 10px 15px;
  ul {
    margin-left: -10px;
    li {
      width: (270-20)/3 + px; height: (270-20)/3 + px;
      background: #005abc;
      text-align: center;
      float: left; margin-left: 10px;
      margin-bottom: 10px;
      span {
        height: 80px;
        line-height: 80px;
        color: #fff;
        display: none;
      }
    }
    li:hover span{
      display: block;
    }
    li.bg-primary { background: #0e90d2; }
  }
}
.version {
  padding: 10px 15px;
  .version-info {
    margin-bottom: 20px;
    p { margin-bottom: 10px; font-size: 14px }
  }
  .version-about {
    blockquote {
      background: #f2f2f2;
      padding: 10px;
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 10px;
    }
    p { font-size: 14px; }
    a { color: #005abc; }
  }
}
</style>
