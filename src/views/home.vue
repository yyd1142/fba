<template>
  <header-component></header-component>
  <div class="page-content home-background-photo">
    <div class="home-search-title">
      <span>亚马逊</span><span>FBA询价</span>
    </div>
    <div class="address-select">
      <div class="originating-address" @click="originatingAddressList">
        <span>起始地&nbsp;&nbsp;&nbsp;|</span>
        <span>上海</span>
      </div>
      <ul class="address-table-view" v-if="originatingAddress" transition="expand">
        <li class="address-table-cell">成都</li>
        <li class="address-table-cell">深圳</li>
        <li class="address-table-cell">广州</li>
        <li class="address-table-cell">珠海</li>
        <li class="address-table-cell">北京</li>
        <li class="address-table-cell">成都</li>
        <li class="address-table-cell">深圳</li>
        <li class="address-table-cell">广州</li>
        <li class="address-table-cell">珠海</li>
        <li class="address-table-cell">北京</li>
      </ul>
      <div class="destination-address" @click="destinationAddressList">
        <span>目的地&nbsp;&nbsp;&nbsp;|</span>
        <span>美国</span>
      </div>
      <ul class="address-table-view destination" v-if="destinationAddress" transition="expand">
        <li class="address-table-cell">加拿大</li>
        <li class="address-table-cell">日本</li>
        <li class="address-table-cell">英国</li>
        <li class="address-table-cell">非洲</li>
      </ul>
      <div class="search-button">
        <i class="search-icon"></i>
      </div>
    </div>
  </div>
  <footer-component></footer-component>
</template>
<script src="../js/home.js" type="text/javascript"></script>
<style src="../style/home.less" lang="less" scoped></style>
