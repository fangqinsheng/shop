<template>
  <div class="container">
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <span>{{ $route.name }}</span>
      </div>
      <el-form :model="user" status-icon :rules="rules" ref="user" label-width="100px" class="demo-ruleForm">
        <!--<el-form-item label="当前密码" prop="pass">-->
          <!--<el-input type="password" style="width: 180px;" v-model="user.pass" autocomplete="off"></el-input>-->
        <!--</el-form-item>-->
        <el-form-item label="新密码" prop="newPass">
          <el-input type="password" style="width: 180px;"  v-model="user.newPass" autocomplete="off"></el-input>
          <span class="tips" style="color: #777; margin-left: 20px">6到16个字符</span>
        </el-form-item>
        <el-form-item label="确认新密码" prop="checkNewPass">
          <el-input type="password" style="width: 180px;"  v-model="user.checkNewPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('user')">确认修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "SetPassowrd",
  data(){
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.user.checkNewPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.user.newPass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      user: {
        // pass: '',
        newPass: '',
        checkNewPass: ''
      },
      rules: {
        newPass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkNewPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>

</style>
