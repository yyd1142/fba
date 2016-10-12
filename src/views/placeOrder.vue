<template>
  <header-component></header-component>
  <div class="page-content">
    <h2>发货信息单</h2>
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
                        <input type="number" placeholder="重量" />
                        <span class="goods-unit">KG</span>
                        <input type="number" placeholder="长" />
                        <span class="goods-unit">CM</span>
                        <input type="number" placeholder="宽" />
                        <span class="goods-unit">CM</span>
                        <input type="number" placeholder="高" />
                        <span class="goods-unit">CM</span>
                        <input type="number" placeholder="数量" />
                        <span class="goods-unit">箱</span>
                        <i class="remove-goods-icon" v-if="$index != 0"></i>
                    </li>
                </ul>
                <div class="rule-goods">＊如有多箱货物，请按数量填写</div>
            </div>
            <div class="filed-inquiry">
                <label>物流方式:</label>
                <div class="input-check">
                    <input type="radio" name="type"><span class="check-name">双清</span>
                    <input type="radio" name="type"><span class="check-name">快递</span>
                </div>
            </div>
            <div class="filed-inquiry">
                <label>报关方式:</label>
                <div class="input-check">
                    <input type="radio" name="type"><span class="check-name">单独报关</span>
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
                <div class="address-detail">
                    <input type="text" placeholder="详细地址" />
                </div>
                <div class="address-filed" style="margin: 6px 0 0 79px;">
                    <select class="select-list th-address-list">
                <option>预订上门时间</option>
                <option>10:00</option>
              </select>
                    <i class="sanjiao-icon sanjiao-address"></i>
                </div>
            </div>
        </form>
    </div>

    <div class="inquiry-view">
        <div class="inquiry-result-header place-order-header">
            <span>订单号:1000001</span>
        </div>
        <div class="order-info-view">
            <div class="order-info-filed">
                <div class="order-info-header">
                    <span>商业发票</span>
                    <span>日期 2018-10-10</span>
                </div>
                <div class="two-fileds">
                    <div class="left-filed">
                        <span>出口发货国家: 中国</span>
                    </div>
                    <div class="right-filed">
                        <span>目的地国家: 美国</span>
                    </div>
                </div>
            </div>
            <div class="two-fileds">
                <div class="left-filed">
                    <label>发货日期:</label>
                    <input type="date" placeholder="Text">
                </div>
                <div class="right-filed">
                    <label>收货人:</label>
                    <input type="text" placeholder="Text">
                </div>
            </div>
            <div class="two-fileds" style="height: 182px;">
                <div class="left-filed">
                    <label>发货人:</label>
                    <textarea placeholder="发货人"></textarea>
                </div>
                <div class="right-filed shouhuo-input">
                    <input type="text" placeholder="Text">
                    <input type="text" placeholder="Text">
                    <textarea placeholder="发货人"></textarea>
                </div>
            </div>
            <div class="filed-inquiry">
                <label>货物信息:</label>
                <i class="goods-plus-icon"></i>
                <ul class="goods-table">
                    <li class="goods-table-view" v-for="todo in 2">
                        <span class='goods-number'>{{$index + 1}}</span>
                        <input type="number" placeholder="重量" />
                        <span class="goods-unit">KG</span>
                        <input type="number" placeholder="长" />
                        <span class="goods-unit">CM</span>
                        <input type="number" placeholder="宽" />
                        <span class="goods-unit">CM</span>
                        <input type="number" placeholder="高" />
                        <span class="goods-unit">CM</span>
                        <input type="number" placeholder="数量" />
                        <span class="goods-unit">箱</span>
                        <i class="remove-goods-icon" v-if="$index != 0"></i>
                    </li>
                </ul>
                <div class="rule-goods">＊如有多箱货物，请按数量填写</div>
            </div>
            <div class="two-fileds">
                <div class="left-filed">
                    <label>合计:</label>
                    <input type="text" placeholder="Text">
                </div>
            </div>
            <div class="two-fileds">
                <div class="left-filed">
                    <label>总件数:</label>
                    <input type="text" placeholder="Text">
                </div>
            </div>
            <div class="two-fileds">
                <div class="left-filed">
                    <label>总数量:</label>
                    <input type="text" placeholder="Text">
                </div>
                <div class="rule-fapiao">我声明发票上所填信息均真实准确</div>
            </div>
            <div class="two-fileds">
                <div class="left-filed">
                    <label class="fapiao-label">发票人签名:</label>
                    <input type="text" placeholder="Text">
                </div>
            </div>
        </div>
        
        <div class="order-info-view">
            <div class="order-upload-view">
                <img src="../../assets/upload_photo.png">
                <div class="upload-button">上传产品图片</div>
            </div>
            <div class="order-info-filed">
                <div class="order-info-header">
                    <span>产品信息</span>
                    <span></span>
                    <i class="plus-big-icon"></i>
                </div>
            </div>
            <div class="two-fileds">
                <div class="left-filed">
                    <label>产品名称:</label>
                    <input type="text" placeholder="Text">
                </div>
            </div>
            <div class="two-fileds">
                <div class="left-filed">
                    <label>品牌:</label>
                    <input type="text" placeholder="Text">
                </div>
            </div>
            <div class="two-fileds">
                <div class="left-filed">
                    <label>型号:</label>
                    <input type="text" placeholder="Text">
                </div>
            </div>
            <div class="two-fileds">
                <div class="left-filed">
                    <label>原理:</label>
                    <input type="text" placeholder="Text">
                </div>
            </div>
            <div class="two-fileds">
                <div class="left-filed">
                    <label>功率:</label>
                    <input type="text" placeholder="Text">
                </div>
            </div>
            <div class="two-fileds">
                <div class="left-filed">
                    <label>电池型号:</label>
                    <input type="text" placeholder="Text">
                </div>
            </div>
        </div>
        
        <div class="order-info-view">
            <div class="order-info-filed">
                <div class="order-info-header">
                    <span>报关信息</span>
                    <span></span>
                </div>
            </div>
            <div class="two-fileds">
                <div class="left-filed">
                    <label>发票:</label>
                    <input type="text" placeholder="Text">
                </div>
                <div class="right-filed">
                    <div class="upload-button-e">上传</div>
                    <div class="upload-button-d">发票模板下载</div>
                </div>
            </div>
            <div class="two-fileds">
                <div class="left-filed">
                    <label>装箱单:</label>
                    <input type="text" placeholder="Text">
                </div>
                <div class="right-filed">
                    <div class="upload-button-e">上传</div>
                    <div class="upload-button-d">发票模板下载</div>
                </div>
            </div>
            <div class="two-fileds">
                <div class="left-filed">
                    <label>报关单:</label>
                    <input type="text" placeholder="Text">
                </div>
                <div class="right-filed">
                    <div class="upload-button-e">上传</div>
                    <div class="upload-button-d">发票模板下载</div>
                </div>
            </div>
            <div class="mark-view">
                <span>备注:</span>
                <ul class="mark-table-view">
                    <li class="mark-table-cell">1. I have a pen.</li>
                    <li class="mark-table-cell">2. I have an apple.</li>
                    <li class="mark-table-cell">3. Umh.</li>
                    <li class="mark-table-cell">4. The apple pen.</li>
                    <li class="mark-table-cell">5. I have a pen.</li>
                    <li class="mark-table-cell">6. I have pineapple.</li>
                    <li class="mark-table-cell">7. Umh.</li>
                    <li class="mark-table-cell">8. Pineapple pen.</li>
                    <li class="mark-table-cell">9. The apple pen.</li>
                    <li class="mark-table-cell">10. Pineapple pen.</li>
                    <li class="mark-table-cell">11. Umh.</li>
                    <li class="mark-table-cell">12. Pen pineapple apple pen.</li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="inquiry-view">
        <div class="inquiry-result-header blue">
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
        
    </div>
    
    <div class="submit-order-button"><i class="success-icon"></i>下单</div>
</div>
  <rule-component :panle-show.sync="rulePanle"></rule-component>
  <footer-component></footer-component>
</template>
<script src="../js/placeOrder.js" type="text/javascript"></script>
<style src="../style/inquiry.less" lang="less" scoped></style>
