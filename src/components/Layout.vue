<template>
  <div class="layout">
    <left-nav :style="{ width: $store.state.width }"></left-nav>
    <top-nav :style="{ left: $store.state.width }"></top-nav>
    <div class="framework" :style="{ left: $store.state.width }">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <router-view></router-view>
    </div>
    <alert-box></alert-box>
  </div>
</template>

<script>
import TopNav from "./nav/TopNav";
import LeftNav from "./nav/LeftNav";
import AlertBox from "./AlertBox"
export default {
  name: "Layout",
  data(){
    return {
      // width: this.$store.state.width
    }
  },
  components: {
    TopNav,
    LeftNav,
    AlertBox
  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
.framework {
  position: fixed;
  z-index: -1;
  top: 60px;
  bottom: 0;
  right: 0;
  background-color: #f9f9f9;
  overflow-y: auto;
}
.el-breadcrumb {
  background-color: #fff; height: 44px; line-height: 44px;
  border-bottom: 1px solid #d8dce5; padding-left: 20px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
}
</style>
