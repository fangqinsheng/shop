<template>
  <div class="login-bg">
    <div class="login-box">
      <img src="@/assets/logo1.png" alt="">
      <h1>商城管理系统</h1>
      <form action="">
        <div class="input-group input-admin">
          <input type="text" placeholder="admin" onblur="this.placeholder='admin'" onfocus="this.placeholder=''"/>
        </div>
        <div class="input-group input-passwd">
          <input type="password" placeholder="密码" onblur="this.placeholder='密码'" onfocus="this.placeholder=''" />
        </div>
        <div class="input-btn clearfloat">
          <div class="select-left">
            <label><input type="checkbox" />记住密码</label>
          </div>
          <div class="miss-right">
            <a href="javascript:void(1)">忘记密码</a>
          </div>
        </div>
        <button value="登录">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login"
  }
</script>

<style scoped lang="scss">
  .login-bg {
    position: absolute;
    width: 100%; height: 100%;
    background: url("../assets/bg.jpg")no-repeat center center;
    background-size: cover;
  }
  .login-box {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    h1 { font-size: 18px; color: #d2d2d2; }
    img { width: 120px; }
    /*form {}*/
    button {
      padding: 12px 0;
      width: 270px;
      background: #0195ff;
      font-size: 18px;
      border-radius: 30px;
      color: #d2d2d2;
    }
  }
  .input-group {
    margin: 20px 0;
    position: relative;
    input {
      line-height: 48px;
      height: 48px;
      padding-left: 70px;
      border: 1px solid #d2d2d2;
      background: none;
      border-radius: 30px;
      width: 200px;
      outline: none;
      color: #d2d2d2;
    }
  }
  .input-group:before {
    position: absolute;
    top: 50%;
    margin-top: -14px;
    left: 18px;
    padding-right: 10px;
    font-family: 'iconfont';
    font-size: 26px;
    color: #d2d2d2;
    border-right: 1px solid #d2d2d2;
  }
  .input-admin:before {
    content: '\e605';
  }
  .input-passwd:before {
    content: '\e85a';
  }
  .input-btn {
    margin-bottom: 20px;
    padding: 0 10px;
    .select-left {
      float: left;
      color: #d2d2d2;
      cursor: pointer;
      font-size: 14px;
      vertical-align: middle;
      input {
        vertical-align: middle;
        margin-right: 4px;
      }
    }
    .miss-right {
      float: right;
      a {
        color: #d2d2d2;
        font-size: 14px;
      }
    }
  }
</style>
