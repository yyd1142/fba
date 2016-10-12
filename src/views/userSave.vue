<template>
    <header-component></header-component>
    <div class="page-content user-warp">
        <navigation-bar :path="pathName"></navigation-bar>
        <div class="user-page-content save-content">
            <ul class="save-table-view">
                <li class="save-table-cell" v-for="item in 5">
                    <div class="save-header">
                        <div class="header-left">
                             <span class="baojia-number">报价编号<br/><span>FMB14222</span></span>
                             <span class="header-address">深圳Shenzhen</span> 
                        </div>
                        <i class="header-fly-icon"></i>
                        <div class="header-right">
                            <span class="header-address-right">美国UNITEDSTATES</span>
                            <span class="expiry-date">有效期<br/><span>2016-10-10</span></span>
                        </div>
                    </div>
                    <div class="save-warp">
                        <i class="invalid-icon"></i>
                        <div class="save-left">
                             <span class="save-type">普货</span>
                             <span class="save-id">PHL6 CARLISLEPA17015</span> 
                        </div>
                        <div class="save-goods-info">100 KGS<br/>12.92 CBM</div>
                        <div class="save-right">
                            <span class="save-price">7600元</span>
                            <div class="save-action">
                                <span class="action-button"><i class="view-icon"></i>查看</span>
                                <span class="action-button"><i class="edit-icon"></i>编辑</span>
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
