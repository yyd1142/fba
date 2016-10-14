<template>
    <header-component></header-component>
    <div class="page-content user-warp">
        <navigation-bar :path="pathName"></navigation-bar>
        <div class="user-page-content save-content"></div>
    </div>
    <pay-view :panle-show.sync="payPanle"></pay-view>
    <footer-component></footer-component>
</template>
<script src="../js/userMessage.js" type="text/javascript"></script>
<style src="../style/userInfo.less" lang="less" scoped></style>
