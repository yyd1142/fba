<template>
	<header-component></header-component>
	<div class="page-content home-background-photo">
		<div class="home-search-title">
			<span>亚马逊</span><span>FBA询价</span>
		</div>
		<div class="address-select">
			<div class="originating-address">
				<span>起始地&nbsp;&nbsp;&nbsp;|</span>
				<select class="address-list-select" v-on:change="startAddressSelect" v-model="startAddress">
            <option value="">选择起始地</option>
            <option v-for="item in originatingAddressItems" :value="item">{{item.address}}</option>
        </select>
			</div>
			<div class="destination-address">
				<span>目的地&nbsp;&nbsp;&nbsp;|</span>
				<select class="address-list-select" v-on:change="endAddressSelect" v-model="endAddress">
            <option value="">选择目的地</option>
            <option v-for="item in destinationAddressItems" :value="item">{{item.address}}</option>
        </select>
			</div>
			<div class="search-button" v-link="{path: '/inquiry#top'}">
				<i class="search-icon"></i>
			</div>
		</div>
	</div>
	<footer-component></footer-component>
</template>
<script src="../js/home.js" type="text/javascript"></script>
<style src="../style/home.less" lang="less" scoped></style>