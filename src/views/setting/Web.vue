<template>
  <div class="container">
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <span>{{$route.name}}</span>
      </div>
      <el-form :model="web" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="网站名称" prop="name">
          <el-input v-model="web.name"></el-input>
         </el-form-item>
        <el-form-item label="网站域名" prop="url">
          <el-input placeholder="请输入内容" v-model="web.url">
            <template slot="prepend">Http://</template>
          </el-input>
        </el-form-item>
        <el-form-item label="缓存时间" prop="cookie">
          <el-input v-model="web.cookie" style="width: 80px;"></el-input>
          <span class="unit" style="margin: 0 15px">分钟</span>
          <span class="tips" style="color: #777;">本地开发一般推荐设置为0，线上环境建议为10</span>
        </el-form-item>
        <el-form-item label="最大文件上传" prop="name">
          <el-input v-model="web.maxSize" style="width: 80px;"></el-input>
          <span class="unit" style="margin: 0 15px">KB</span>
          <span class="tips" style="color: #777;">提示： 1M = 1024KB</span>
        </el-form-item>
        <el-form-item label="上传文件类型" prop="type">
          <el-input v-model="web.type"></el-input>
        </el-form-item>
        <el-form-item label="首页标题" prop="title">
          <el-input type="textarea" v-model="web.title"></el-input>
        </el-form-item>
        <el-form-item label="META关键词" prop="keywords">
          <el-input type="textarea" v-model="web.keywords"  placeholder="多个关键词用，号分隔"></el-input>
        </el-form-item>
        <el-form-item label="META描述" prop="desc">
          <el-input type="textarea" v-model="web.desc"></el-input>
        </el-form-item>
        <el-form-item label="版权信息" prop="info">
          <el-input type="textarea" v-model="web.info"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="submitForm('ruleForm')">确认保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "web",
  data(){
    return {
      web: {
        name: "Welshine Shop",
        url: "www.welshine.com",
        cookie: 0,
        maxSize: 2048,
        type: "png | gif | jpg | jpeg | zip | rar",
        title: "WelshineShop商城管理平台",
        keywords: '',
        desc: 'WelshineShop是由惠而信旗下开发的一套B2B的商城管理平台，用于分布式架构更好的处理多终端用户的商城体验',
        info: '© 2018 welshine.com MIT license'
      }
    }
  }
}
</script>

<style scoped>

</style>
