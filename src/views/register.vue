<template>
  <header-component></header-component>
  <div class="page-content">
      <form class="form-view register-view">
        <div class="filed register">
          <label>用户名</label>
          <input type="text" placeholder="输入用户名" v-model="item.userName">
        </div>
        <div class="filed register">
          <label>密码</label>
          <input type="password" placeholder="输入密码" v-model="item.password">
        </div>
        <div class="filed register">
          <label>确认密码</label>
          <input type="password" placeholder="再次输入密码" v-model="item.comfirmPassword">
        </div>
        <div class="filed register">
          <label>手机号码</label>
          <input type="tel"  placeholder="输入手机号码" v-model="item.mobile">
        </div>
        <div class="filed register">
          <label>邮箱</label>
          <input type="email" placeholder="输入邮箱" v-model="item.email">
        </div>
        <div class="filed register">
          <label>业务员</label>
          <select class="select-list yewuyuan-list">
            <option>余颖德</option>
            <option>余颖德</option>
          </select>
          <i class="sanjiao-icon sanjiao-register"></i>
        </div>
        <ul class="error-table-view">
          <li class="error-table-cell" v-if="item.password != item.comfirmPassword">Please enter the same password</li>
          <li class="error-table-cell" v-for="item in emptyItems">
            <span v-if="item != 'comfirmPassword'">Please enter {{item}}</span>
            <span v-else>Please enter the password again</span>
          </li>
        </ul>
        <div class="login-button" @click="register">注册</div>
        <div class="go-register" v-link="{path: '/login'}">返回登录</div>
      </form>
  </div>
  <hint-view :code="errorCode" :panle-show.sync="hintShow" :message="message"></hint-view>
  <footer-component></footer-component>
</template>
<script src="../js/register.js" type="text/javascript"></script>
<style src="../style/login.less" lang="less" scoped></style>
