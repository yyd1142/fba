<template>
	<header-component></header-component>
	<div class="page-content">
		<h2>发货信息单</h2>
		<goods-info :form-data="inquiryFomrData"></goods-info>
		<div class="inquiry-view">
			<div class="inquiry-result-header place-order-header">
				<span>订单详情</span>
			</div>
			<!--发票信息-->
			<invoice-info v-if="formData.logisticsID == 2"></invoice-info>
			<!--订单信息-->
			<order-info :form-data="formData" v-if="formData.logisticsID == 1"></order-info>
			<!--商品信息-双清-->
			<goods-table v-if="formData.logisticsID == 1"></goods-table>
			<!--产品信息-->
			<product-info></product-info>
			<!--报关信息-->
			<customs-info :form-data="formData"></customs-info>
		</div>
		<!--询价table-->
		<place-order :price-items="priceItems"></place-order>
		<div class="submit-order-button" @click="submit"><i class="success-icon"></i>下单</div>
	</div>
	<rule-component :panle-show.sync="rulePanle"></rule-component>
	<footer-component></footer-component>
	<hint-view :panle-show.sync="hintShow" :message="message"></hint-view>
</template>
<script src="../js/placeOrder.js" type="text/javascript"></script>
<style src="../style/inquiry.less" lang="less" scoped></style>