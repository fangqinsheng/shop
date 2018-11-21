<template>
  <el-row id="error">
    <el-col :span="12" class="error-left">
      <img src="../assets/404.png" alt="">
    </el-col>
    <el-col :span="12" class="error-right">
      <h3>哎哟，页面好像丢失了！</h3>
      <ul>
        <li>尝试先浏览下其他的页面</li>
        <li>致电020-xxxx-xxxxx,小惠将全程为您提供服务</li>
        <li>微信公众号搜索惠而信，可以了解到更多关于我司的信息</li>
      </ul>
      <div class="btn-group">
        <el-button type="primary">返回首页</el-button>
        <el-button type="info">返回上一页</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Error"
}
</script>

<style scoped lang="scss">
#error {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1000px;
  height: 600px;
  margin-left: -500px;
  margin-top: -300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error-left { }
h3 { font-size: 28px; color: #f07700;  }
ul {
  margin-left: 20px;
  li {
    margin-top: 30px;
    list-style: disc;
    font-size: 16px;
  }
}
.btn-group { margin-top: 30px; }
</style>
