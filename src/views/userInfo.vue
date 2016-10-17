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
                        <input type="text" placeholder="输入用户名" v-model="userItem.userName"/>
                   </div>
                   <div class="user-filed">
                        <label>邮箱</label>
                        <input type="email" placeholder="输入邮箱" v-model="userItem.email"/>
                   </div>
                   <div class="user-filed">
                        <label>手机号码</label>
                        <input type="tell" placeholder="输入手机号码" maxlength="11" v-model="userItem.mobile"/>
                   </div>
                   <div class="user-filed">
                        <label>公司名称</label>
                        <input type="text" placeholder="输入公司名称" v-model="userItem.company"/>
                   </div>
                   <div class="user-filed">
                        <label>固定电话</label>
                        <input type="tell" placeholder="输入电话" v-model="userItem.phone"/>
                   </div>
                   <div class="user-filed">
                        <label>地址</label>
                        <div class="select-list-user">
                            <select v-model="countryID" v-on:change="provinceList">
                                <option value="">国家</option>
                                <option v-for="todo in countries" :value="todo.ID">{{todo.Name}}</option>
                            </select>
                            <i class="sanjiao-icon sanjiao-user"></i>
                        </div>
                        <div class="select-list-user">
                            <select v-model="provinceID" v-on:change="cityList">
                                <option value="">省份/州</option>
                                <option v-for="todo in provinces" :value="todo.ID">{{todo.Name}}</option>
                            </select>
                            <i class="sanjiao-icon sanjiao-user"></i>
                        </div>
                        <div class="select-list-user">
                            <select v-model="cityID" v-on:change="townList">
                                <option value="">城市</option>
                                <option v-for="todo in cities" :value="todo.ID">{{todo.Name}}</option>
                            </select>
                            <i class="sanjiao-icon sanjiao-user"></i>
                        </div>
                        <div class="select-list-user">
                            <select v-model="townID" v-on:change="streetList">
                                <option value="">区/县</option>
                                <option v-for="todo in towns" :value="todo.ID">{{todo.Name}}</option>
                            </select>
                            <i class="sanjiao-icon sanjiao-user"></i>
                        </div>
                   </div>
                   <div class="user-filed">
                        <input class="user-full-input" type="text" placeholder="请输入详细地址" v-model="userItem.address"/>
                   </div>
                   <div class="user-filed">
                        <label>邮政编码</label>
                        <input type="number" placeholder="请输入邮政编码" v-model="userItem.postcode"/>
                   </div>
                   <div class="save-button" @click="editInfo">保存</div>
             </form>
             <div class="salesman-card">
                <div class="salesman-name"><i class="tell-phone-icon"></i>您的业务专员</div>
                <div class="salesman-rule">
                    姓名: {{userItem.salesman.name}}<br/>电话: {{userItem.salesman.phone}}<br/>邮箱: {{userItem.salesman.email}}
                </div>
             </div>
        </div>
    </div>
    <hint-view :panle-show.sync="hintShow" :message="message"></hint-view>
    <footer-component></footer-component>
</template>
<script src="../js/userInfo.js" type="text/javascript"></script>
<style src="../style/userInfo.less" lang="less" scoped></style>
