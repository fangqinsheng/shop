<template>
  <el-row class="left-nav">
    <div class="logo">
      <a href="" v-show="!$store.state.collapsed">Welshine Shop</a>
      <a href="" v-show="$store.state.collapsed">shop</a>
    </div>
    <el-menu
      default-active="1-1" class="el-menu-vertical-demo" :unique-opened= true :router= true
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="$store.state.collapsed">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/goods/list">商品列表</el-menu-item>
          <el-menu-item index="/goods/add">商品发布</el-menu-item>
          <el-menu-item index="/goods/category">商品类别</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/list">全部订单</el-menu-item>
          <el-menu-item index="order/refund">维权订单</el-menu-item>
          <el-menu-item index="2-3">发票管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </el-row>
</template>

<script>
export default {
  name: "LeftNav",
  data(){
    return {
      collapsed: this.$store.state.collapsed
    }
  },
  // props: ["leftNavWidth"],
  mounted(){

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.left-nav {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: #545c64;
}
.logo {
  text-align: center;
  height: 60px;
  background: #005abc;
  a {
    font-size: 16px;
    line-height: 60px;
    color: #fff;
  }
}
.el-menu {
  border-right: none;
}
</style>
