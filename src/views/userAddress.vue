<template>
	<header-component></header-component>
	<div class="page-content user-warp">
		<navigation-bar :path="pathName"></navigation-bar>
		<div class="user-page-content address-content">
			<ul class="address-table-view">
				<li class="address-table-cell" v-for="item in 6">
					<div class="address-warp">
						<div class="address-user">吴先生</div>
						<div class="address-action">
							<span>修改</span>
							<span>删除</span>
						</div>
						<div class="address-item">深圳市宝安区xx路xx门牌</div>
						<div class="address-phone">18844333222</div>
					</div>
				</li>
				<li class="address-add">
					<div class="address-add-warp">
						<i class="address-plus-icon"></i>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<footer-component></footer-component>
</template>
<script src="../js/userAddress.js" type="text/javascript"></script>
<style src="../style/userInfo.less" lang="less" scoped></style>