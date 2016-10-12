<template>
  <header-component></header-component>
  <div class="page-content">
      <form class="form-view">
        <div class="filed">
          <label>Email</label>
          <input type="email" placeholder="输入email" v-model="item.email">
        </div>
        <div class="filed">
          <label>密码</label>
          <input type="password" placeholder="输入密码" v-model="item.password">
        </div>
        <div class="remember-filed">
          <input type="checkbox" />
          <label>记住我</label>
        </div>
        <ul class="error-table-view">
          <li class="error-table-cell" v-for="item in emptyItems">
            <span>Please enter {{item}}</span>
          </li>
        </ul>
        <div class="login-button" @click="login">登录</div>
        <div class="go-register" v-link="{path: '/register'}">还没账号，注册</div>
      </form>
  </div>
  <hint-view :code="errorCode" :panle-show.sync="hintShow" :message="message"></hint-view>
  <footer-component></footer-component>
</template>
<script src="../js/login.js" type="text/javascript"></script>
<style src="../style/login.less" lang="less" scoped></style>
