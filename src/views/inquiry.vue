<template>
  <header-component></header-component>
  <div class="page-content">
     <h2>亚马逊FBA询价</h2>
     <div class="inquiry-view">
        <div class="inquiry-header">
            <div class="originating-address">
                <label>起运地</label>
                <select class="address-list select-list" v-model="startAddress" v-on:change="goodsTypeList">
                    <option value="">请选择起运地</option>
                    <option v-for="item in originatingAddressItems" :value="item">{{item.address}}</option>
                </select>
                <i class="sanjiao-icon sanjiao-header"></i>
            </div>
            <i class="fly-icon"></i>
            <div class="destination-address">
                <label>目的地</label>
                <select class="address-list select-list" v-model="endAddress" v-on:change="goodsTypeList">
                    <option value="">请选择目的地</option>
                    <option v-for="item in destinationAddressItems" :value="item">{{item.address}}</option>
                </select>
                <i class="sanjiao-icon sanjiao-header"></i>
            </div>
        </div>
        <form class="inquiry-form">
          <div class="filed-inquiry">
            <label>FBA仓库:</label>
            <input class="select-list fab-list" type="text" placeholder='输出仓库地址' v-model="fbaAddress" v-on:input="findFBA"/>
            <ul class="fba-table-view" v-if="hasData" transition="expand">
                <li class="fba-table-cell" v-if="notData">没有找到结果</li>
                <li class="fba-table-cell" 
                    v-for="item in fbaItems" 
                    v-text="item.fullAddress" 
                    @click="chooseFBA(item)"></li>
            </ul>
          </div>
          <div class="filed-inquiry">
            <label>品名:</label>
            <select class="select-list fab-list" v-model="goodsTypeID" v-on:change="logisticsType">
              <option value="">请选择品名</option>
              <option value="" v-if="goodsTypeNotdata">暂无数据</option>
              <option v-for="item in goodsTypeItems" :value="item.goodsTypeID">{{item.goodsTypeName}}</option>
            </select>
            <i class="sanjiao-icon sanjiao-fba"></i>
          </div>
          <div class="filed-inquiry">
                <label>货物信息:</label>
                <i class="goods-plus-icon" @click="addGoodsInfo"></i>
                <ul class="goods-table">
                    <li class="goods-table-view" v-for="goods in goodsInfo">
                        <span class='goods-number'>{{$index + 1}}</span>
                        <input type="number" placeholder="重量" v-model="goods.wide"/>
                        <span class="goods-unit">KG</span>
                        <input type="number" placeholder="长" v-model="goods.long"/>
                        <span class="goods-unit">CM</span>
                        <input type="number" placeholder="宽" v-model="goods.width"/>
                        <span class="goods-unit">CM</span>
                        <input type="number" placeholder="高" v-model="goods.heigth"/>
                        <span class="goods-unit">CM</span>
                        <input type="number" placeholder="数量" v-model="goods.number"/>
                        <span class="goods-unit">箱</span>
                        <i class="remove-goods-icon" v-if="$index != 0" @click="removeGoodsInfo($index)"></i>
                    </li>
                </ul>
                <div class="rule-goods">＊如有多箱货物，请按数量填写</div>
            </div>
          <div class="filed-inquiry" v-if="logistics">
                <label>物流方式:</label>
                <div class="input-check">
                    <input type="radio" name="type" v-if="shuangQing" value="1" v-model="logisticsID"><span class="check-name" v-if="shuangQing">双清</span>
                    <input type="radio" name="type" v-if="kuaiDi" value="2" v-model="logisticsID"><span class="check-name" v-if="kuaiDi">快递</span>
                </div>
            </div>
            <div class="filed-inquiry">
                <label>报关方式:</label>
                <div class="input-check">
                    <input type="radio" name="todo"><span class="check-name">双清包税</span>
                    <input type="radio" name="todo"><span class="check-name">单独报关</span>
                </div>
            </div>
            <div class="filed-inquiry">
                <label>上门提货:</label>
                <div class="tihuo-button" @click="switchButton = switchButton ? false : true">
                    <i class="switch-button-true" v-if="switchButton"></i>
                    <i class="switch-button-false" v-else></i>
                </div>
            </div>
            <div class="filed-inquiry" v-if="switchButton" transition="expand">
                <label>提货地址:</label>
                <div class="address-filed">
                    <select class="select-list th-address-list">
                <option>省份</option>
                <option>广东</option>
              </select>
                    <i class="sanjiao-icon sanjiao-address"></i>
                </div>
                <div class="address-filed">
                    <select class="select-list th-address-list">
                <option>城市</option>
                <option>深圳</option>
              </select>
                    <i class="sanjiao-icon sanjiao-address"></i>
                </div>
                <div class="address-filed">
                    <select class="select-list th-address-list">
                <option>区/县城</option>
                <option>南山区</option>
              </select>
                    <i class="sanjiao-icon sanjiao-address"></i>
                </div>
                <div class="address-filed">
                    <select class="select-list th-address-list">
                <option>街道</option>
                <option>粤海街道</option>
              </select>
                    <i class="sanjiao-icon sanjiao-address"></i>
                </div>
            </div>
          <div class="form-action">
            <div class="submit-button inquiry-button" @click="price">询价</div>
          </div>
        </form>
     </div>
     <div id="resultPanle">
      <div class="inquiry-view" v-if="resultPanle" transition="expand">
          <div class="inquiry-result-header">
            <span>报价编号: FX13314D2</span>
            <span>费用详情</span>
            <span>报价有效期: 2016-10-19</span>
          </div>
          <div class="table-panle">
            <table class="inquiry-table">
              <thead>
                <tr>
                  <th class="left-td">费用项目</th>
                  <th>单价（元）</th>
                  <th>数量</th>
                  <th>单位</th>
                  <th>金额</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="todo in 4">
                  <td class="left-td">运费</td>
                  <td>20.00</td>
                  <td>340</td>
                  <td>KGS</td>
                  <td>4560.00</td>
                </tr>
              </tbody>
            </table>
            <div class="result-rule">＊如产生额外费用，实报实销</div>
            <div class="total-price">合计: <span>￥7600.00</span></div>
          </div>  
          <div class="form-action">
              <div class="submit-button order-button" @click="submit">下单</div>
              <div class="collect-button">收藏</div>
            </div>      
      </div>
     </div>
  </div>
  <rule-component :panle-show.sync="rulePanle"></rule-component>
  <footer-component></footer-component>
</template>
<script src="../js/inquiry.js" type="text/javascript"></script>
<style src="../style/inquiry.less" lang="less" scoped></style>
