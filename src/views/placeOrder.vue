<template>
	<header-component></header-component>
	<div class="page-content">
		<h2>发货信息单</h2>
		<goods-info :item.sync="formData"></goods-info>
		<div class="inquiry-view">
			<div class="inquiry-result-header place-order-header">
				<span>订单详情</span>
			</div>
			<invoice-info></invoice-info>
			<product-info></product-info>
			<customs-info></customs-info>
		</div>
		<place-order :item.sync="formData"></place-order>
		<div class="submit-order-button"><i class="success-icon"></i>下单</div>
	</div>
	<rule-component :panle-show.sync="rulePanle"></rule-component>
	<footer-component></footer-component>
</template>
<script src="../js/placeOrder.js" type="text/javascript"></script>
<style src="../style/inquiry.less" lang="less" scoped></style>