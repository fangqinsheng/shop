<template>
   <div class="top-nav">
     <div class="indent-btn" @click="changeCollapse">
       <i class="el-icon-isCollapsed1" v-show="collapsed" @click="closeCollapse"></i>
       <i class="el-icon-isCollapsed" v-show="!collapsed" @click="openCollapse"></i>
     </div>
     <el-menu :default-active="currentRoute" mode="horizontal"text-color="#fff"
              class="el-menu-demo top-nav-left" active-text-color="#ffd04b">
       <el-menu-item index="home">系统</el-menu-item>
       <el-menu-item index="2">销售</el-menu-item>
       <el-menu-item index="3">运营</el-menu-item>
       <el-menu-item index="4">统计</el-menu-item>
       <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">文档</a></el-menu-item>
     </el-menu>
     <div class="top-nav-right btn-group">
       <a href="javascript:void(0)"><i class="iconfont" title="便签">&#xe602;</i></a>
       <a href="https://www.baidu.com"><i class="iconfont" title="浏览前台">&#xe60a;</i></a>
       <a href="javascript:void(0)"><i class="iconfont" title="消息提醒">&#xe8bf;</i></a>
       <a href="javascript:void(0)" @click="changeAlertBox(0)"><i class="iconfont" title="主题切换">&#xe606;</i></a>
       <a href="javascript:void(0)" @mouseover="changeShow()" @mouseout="removeShow()">
         admin<i class="el-icon-triangle-down" v-show="isShow"></i>
              <i class="el-icon-triangle-up" v-show="!isShow"></i>
       </a>
       <el-card shadow="always" class="admin-box" :body-style="{padding: '0px'}" v-show="!isShow">
         <div slot="header" class="clearfix">
          <el-col><router-link to="list">基本信息</router-link></el-col>
          <el-col><router-link to="list">修改密码</router-link></el-col>
         </div>
          <el-col><router-link to="list">退出</router-link></el-col>
       </el-card>
       <a href="javascript:void(0)" @click="changeAlertBox(1)" ><i class="el-icon-ellipsis" title="版本信息"></i></a>
     </div>
   </div>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      currentRoute: 'home',
      collapsed: this.$store.state.collapsed,
      width: this.$store.state.width,
      isShow: true
    }
  },
  methods: {
    // es6的语法，相当于isCollapse: function(){}
    changeCollapse(){
      this.collapsed = !this.collapsed;
      this.$store.state.collapsed = this.collapsed;
    },
    openCollapse(){
      this.$store.state.width = '64px';
    },
    closeCollapse(){
      this.$store.state.width = '200px';
    },
    changeShow(){
      this.isShow = false;
    },
    removeShow(){
      this.isShow = true
    },
    changeAlertBox: function (e) {
      alert(e)
    }
  }
};
</script>

<style scoped lang="scss">
.top-nav {
  position: fixed;
  top: 0;
  right: 0;
  height: 60px;
  background: #005abc;
}
.indent-btn {
  position: absolute;
  left: 0;
  line-height: 60px;
  i {
    padding: 0 15px; line-height: 60px;
    color: #fff; font-size: 18px;
  }
}
.el-menu {
  background-color: transparent;
}
.top-nav-left {
  position: absolute;
  left: 46px;
}
.top-nav-right {
  position: absolute;
  right: 0;
}
.btn-group {
  line-height: 60px;
  a {
    color: #fff;
    padding: 0 15px;
    height: 60px;
    i { color: inherit; }
  }
}
.admin-box {
  position: absolute;
  top: 60px;
  right: 20px;
  width: 140px;
  a {
    color: #333;
  }
}
</style>
