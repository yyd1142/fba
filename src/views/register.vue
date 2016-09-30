<template>
  <header-component></header-component>
  <div class="page-content">
      <form class="form-view register-view">
        <div class="filed register">
          <label>用户名</label>
          <input type="text" placeholder="输入用户名">
        </div>
        <div class="filed register">
          <label>密码</label>
          <input type="password" placeholder="输入密码">
        </div>
        <div class="filed register">
          <label>确认密码</label>
          <input type="password" placeholder="再次输入码密码">
        </div>
        <div class="filed register">
          <label>手机号码</label>
          <input type="tel" placeholder="输入手机号码">
        </div>
        <div class="filed register">
          <label>邮箱</label>
          <input type="email" placeholder="输入邮箱">
        </div>
        <div class="filed register">
          <label>业务员</label>
          <input type="password" placeholder="输入业务员">
        </div>
        <div class="login-button">注册</div>
        <div class="go-register" v-link="{path: '/login'}">返回登录</div>
      </form>
  </div>
  <footer-component></footer-component>
</template>
<script src="../js/register.js" type="text/javascript"></script>
<style src="../style/login.less" lang="less"></style>
