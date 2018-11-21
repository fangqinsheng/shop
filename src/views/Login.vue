<template>
  <div class="login-bg">
    <div class="login-box">
      <el-form :model="loginForm" status-icon :rules="loginRules" align="center" ref="loginForm" class="demo-ruleForm">
        <div class="login-logo">
          <img src="@/assets/logo1.png" alt="">
          <h1>商城管理系统</h1>
        </div>
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-touxiang" v-model="loginForm.username" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-suo" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-col class="function-btn">
            <!-- 记住密码一般包括设置cookie，获取cookie，清除cookie3个-->
            <el-checkbox v-model="checked">记住密码</el-checkbox>
            <el-button type="text">忘记密码?</el-button>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin('loginForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    const validateUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }
      // else if ( value !== this.data.loginForm.username ){
      //   return callback(new Error('账号不存在'))
      // }
      else {
        callback();
      }
    };
    const validatePassWord = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'));
      } else {
        callback();
      }
    };
    return {
      checked: false,
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        password: [
          { validator: validatePassWord, trigger: 'blur' }
        ],
        username: [
          { validator: validateUserName, trigger: 'blur' }
        ]
      }
    }
  },
  beforeMount: function(){
    this.axios.get('/api/user').then(res =>{
      this.data = res.data;
      console.log(res);
    })
  },
  mounted() {
    // 模板已经渲染完成后渲染加载html，页面初始化后获取cookie
    this.getCookie();
  },
  methods: {
    // 提交验证
    handleLogin(formName) {
      this.$refs[formName].validate( (valid) => {
        if (valid) {
          alert('登录成功！');
          this.$router.push({path: '/'})
          // this.loading = true;
          // this.$store.dispatch('events', this.loginForm).then(() => {
          //   this.loading = false;
          //   this.$router.push({path: '/'});
          // }).catch(err => {
          //   this.$message.error(err);
          //   this.loading = false;
          // });
        } else {
          // console.log('登录失败');
          this.$message.error('账号或者密码错误');
          return false;
        }
      });
      const self = this;
      if (self.checked === true){
        console.log("checked == true");
        //传入账号名，密码和保存天数3个参数
        self.setCookie(self.loginForm.username, self.loginForm.password, 7);
      }else{
        console.log("清空cookie");
        self.clearCookie();
      }
      console.log("登录成功");
    },
    setCookie(c_name, c_pwd, exdays){
      let exp = new Date(); // 获取时间
      exp.setTime(exp.getTime() + 24*60*60*1000*exdays); // 保存的天数
      window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exp.toGMTString(); // toGMTString代表背景时间
      window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exp.toGMTString();
    },
    // 读取cookie
    getCookie: function(){
      if (document.cookie.length > 0){
        var arr = document.cookie.split(';');
        console.log(arr);
        for (let i=0; i<arr.length; i++){
          var arr2 = arr[i].split('=');
          if(arr2[0] == 'userName') {
            this.loginForm.username = arr2[1];
          }else if (arr2[1] == 'userPwd') {
            this.loginForm.password = arr2[2];
          }
        }
      }
    },
    clearCookie: function () {
      this.setCookie("", "", -1);
    }
  }
}
</script>

<style lang="scss">
.el-input, .el-button--primary{
  width: 260px;
}
.login-bg {
  position: absolute;
  width: 100%; height: 100%;
  background: url("../assets/bg.jpg")no-repeat center center;
  background-size: cover;
}
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  .login-logo {
    margin-bottom: 20px;
  }
  h1 {
    font-size: 18px;
    color: #d2d2d2;
  }
  img {
    width: 120px;
  }
}
.function-btn {
  display: flex;
  margin: -22px 0;
  flex: 1;
  justify-content: space-between;
  .el-button--text {
    color: #d2d2d2;
  }
  .el-checkbox__label {
    color: #d2d2d2;
  }
}
</style>
