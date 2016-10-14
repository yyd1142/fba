<template>
	<header-component></header-component>
	<div class="page-content">
		<h2>亚马逊FBA询价</h2>
		<goods-info :item.sync="formData"></goods-info>
		<div id="resultPanle">
			<div class="inquiry-view" v-if="resultPanle" transition="expand">
				<div class="inquiry-result-header">
					<span>报价编号: {{inquiryItem.inquiryID}}</span>
					<span>费用详情</span>
					<span>报价有效期: {{inquiryItem.expires | dateFormatFilter}}</span>
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
							<tr v-for="item in inquiryItem.pricesInfo">
								<td class="left-td">{{item.cname}}</td>
								<td>{{item.unitPrice}}</td>
								<td>{{item.number}}</td>
								<td>{{item.unit | unitFilter}}</td>
								<td>{{item.price}}</td>
							</tr>
						</tbody>
					</table>
					<div class="result-rule">＊如产生额外费用，实报实销</div>
					<div class="total-price">合计: <span>￥{{inquiryItem.totalPrice}}</span></div>
				</div>
				<div class="form-action">
					<div class="submit-button order-button" @click="placeOrder">下单</div>
					<div class="collect-button" @click="collection">{{collectionText}}</div>
				</div>
			</div>
		</div>
	</div>
	<hint-view :panle-show.sync="hintShow" :message="message"></hint-view>
	<rule-component :panle-show.sync="rulePanle"></rule-component>
	<footer-component></footer-component>
</template>
<script src="../js/inquiry.js" type="text/javascript"></script>
<style src="../style/inquiry.less" lang="less" scoped></style>