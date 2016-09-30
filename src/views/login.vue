<template>
  <header-component></header-component>
  <div class="page-content">
      <form class="form-view">
        <div class="filed">
          <label>Email</label>
          <input type="text" placeholder="输入email">
        </div>
        <div class="filed">
          <label>密码</label>
          <input type="password" placeholder="输入密码">
        </div>
        <div class="remember-filed">
          <input type="checkbox" />
          <label>记住我</label>
        </div>
        <div class="login-button">登录</div>
        <div class="go-register" v-link="{path: '/register'}">还没账号，注册</div>
      </form>
  </div>
  <footer-component></footer-component>
</template>
<script src="../js/login.js" type="text/javascript"></script>
<style src="../style/login.less" lang="less"></style>
