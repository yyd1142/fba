<template>
  <header-component></header-component>
  <div class="page-content">
     <h2>亚马逊FBA询价</h2>
     <div class="inquiry-view">
        <div class="inquiry-header">
            <div class="originating-address">
                <label>起运地</label>
                <select class="address-list select-list">
                  <option>罗湖</option>
                  <option>宝安</option>
                  <option>广州</option>
                </select>
                <i class="sanjiao-icon sanjiao-header"></i>
            </div>
            <i class="fly-icon"></i>
            <div class="destination-address">
                <label>起运地</label>
                <select class="address-list select-list">
                  <option>美国</option>
                  <option>东京</option>
                  <option>非洲</option>
                </select>
                <i class="sanjiao-icon sanjiao-header"></i>
            </div>
        </div>
        <form class="inquiry-form">
          <div class="filed-inquiry">
            <label>FBA仓库:</label>
            <select class="select-list fab-list">
              <option>请选择FBA仓库</option>
              <option>英国,NA,OldStars</option>
              <option>美国,FN,OldStars</option>
            </select>
            <i class="sanjiao-icon sanjiao-fba"></i>
          </div>
          <div class="filed-inquiry">
            <label>品名:</label>
            <select class="select-list fab-list">
              <option>请选择品名</option>
              <option>英国,NA,OldStars</option>
              <option>美国,FN,OldStars</option>
            </select>
            <i class="sanjiao-icon sanjiao-fba"></i>
          </div>
          <div class="filed-inquiry">
            <label>货物信息:</label>
            <i class="goods-plus-icon"></i>
            <ul class="goods-table">
              <li class="goods-table-view" v-for="todo in 2">
                <span class='goods-number'>{{$index + 1}}</span>
                <input type="number" placeholder="重量"/>
                <span class="goods-unit">KGS</span>
                <input type="number" placeholder="体积"/>
                <span class="goods-unit">CBM</span>
              </li>
            </ul>
            <div class="rule-goods">＊如有多箱货物，请按数量填写</div>
          </div>
          <div class="filed-inquiry">
            <label>报关方式:</label>
            <div class="input-check">
              <input type="radio" name="type"><span class="check-name">双清包税</span>
              <input type="radio" name="type"><span class="check-name">单独报关</span>
            </div>
          </div>
          <div class="filed-inquiry">
            <label>上门提货:</label>
            <div class="tihuo-button">
              <i class="switch-button-false"></i>
            </div>
          </div>
        </form>
     </div>
  </div>
  <footer-component></footer-component>
</template>
<script src="../js/inquiry.js" type="text/javascript"></script>
<style src="../style/inquiry.less" lang="less"></style>
