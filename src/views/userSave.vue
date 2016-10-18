<template>
    <header-component></header-component>
    <div class="page-content user-warp">
        <navigation-bar :path="pathName"></navigation-bar>
        <div class="user-page-content save-content">
            <ul class="save-table-view">
                <li class="save-table-cell" v-for="item in saveItems">
                    <div class="save-header">
                        <div class="header-left">
                             <span class="baojia-number">报价编号<br/><span>{{item.inquiryID}}</span></span>
                             <span class="header-address" v-text="item.startName"></span> 
                        </div>
                        <i class="header-fly-icon"></i>
                        <div class="header-right">
                            <span class="header-address-right" v-text="item.endName"></span>
                            <span class="expiry-date">有效期<br/><span>{{item.expires | dateFormatFilter}}</span></span>
                        </div>
                    </div>
                    <div class="save-warp">
                        <i class="invalid-icon" v-if="item.status == 2"></i>
                        <div class="save-left">
                             <span class="save-type">{{item.typeGoodsName}}</span>
                             <span class="save-id">{{item.FBAWarehouseName}}</span> 
                        </div>
                        <div class="save-goods-info">{{item.weight}} KGS<br/>{{item.volume}} CBM</div>
                        <div class="save-right">
                            <span class="save-price">{{item.totalPrice}}元</span>
                            <div class="save-action">
                                <span class="action-button" @click="info(item)"><i class="view-icon"></i>查看</span>
                                <!--<span class="action-button"><i class="edit-icon"></i>编辑</span>-->
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="page-warp">
                <ul class="page-action">
                    <li class="page-previous"><i class="previous-icon"></i></li>
                    <li class="page-number page-number-active">
                        <span>1</span>
                    </li>
                    <li class="page-number">
                        <span>2</span>
                    </li>
                    <li class="page-number">
                        <span>3</span>
                    </li>
                    <li class="page-previous"><i class="next-icon"></i></li>
                </ul>
            </div>
        </div>
    </div>
    <footer-component></footer-component>
</template>
<script src="../js/userSave.js" type="text/javascript"></script>
<style src="../style/userInfo.less" lang="less" scoped></style>
