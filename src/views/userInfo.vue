<template>
    <header-component></header-component>
    <div class="page-content user-warp">
        <navigation-bar :path="pathName"></navigation-bar>
        <div class="user-page-content">
             <form class="user-page-form">
                   <div class="upload-image">
                        <img src="../../assets/user-head-image.png" />
                        <div>更新头像</div>
                   </div>
                   <div class="user-filed">
                        <label>用户名</label>
                        <input type="text" />
                   </div>
                   <div class="user-filed">
                        <label>邮箱</label>
                        <input type="email" />
                   </div>
                   <div class="user-filed">
                        <label>手机号码</label>
                        <input type="tell" />
                   </div>
                   <div class="user-filed">
                        <label>公司名称</label>
                        <input type="text" />
                   </div>
                   <div class="user-filed">
                        <label>电话</label>
                        <input type="number" />
                   </div>
                   <div class="user-filed">
                        <label>地址</label>
                        <div class="select-list-user">
                            <select>
                                <option>国家</option>
                                <option>中国</option>
                                <option>中国</option>
                            </select>
                            <i class="sanjiao-icon sanjiao-user"></i>
                        </div>
                        <div class="select-list-user">
                            <select>
                                <option>省份/州</option>
                                <option>中国</option>
                                <option>中国</option>
                            </select>
                            <i class="sanjiao-icon sanjiao-user"></i>
                        </div>
                        <div class="select-list-user">
                            <select>
                                <option>城市</option>
                                <option>中国</option>
                                <option>中国</option>
                            </select>
                            <i class="sanjiao-icon sanjiao-user"></i>
                        </div>
                        <div class="select-list-user">
                            <select>
                                <option>区/县</option>
                                <option>中国</option>
                                <option>中国</option>
                            </select>
                            <i class="sanjiao-icon sanjiao-user"></i>
                        </div>
                   </div>
                   <div class="user-filed">
                        <label>&nbsp;</label>
                        <input class="full-input" type="text" />
                   </div>
                   <div class="user-filed">
                        <label>邮政编码</label>
                        <input type="number" />
                   </div>
                   <div class="save-button">保存</div>
             </form>
             <div class="salesman-card">
                <div class="salesman-name"><i class="tell-phone-icon"></i>您的业务专员</div>
                <div class="salesman-rule">
                    姓名: 小庄同学<br/>电话: 15800010002<br/>邮箱: xxx@fba.com
                </div>
             </div>
        </div>
    </div>
    <footer-component></footer-component>
</template>
<script src="../js/userInfo.js" type="text/javascript"></script>
<style src="../style/userInfo.less" lang="less" scoped></style>
