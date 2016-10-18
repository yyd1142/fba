<template>
	<header-component></header-component>
	<div class="page-content user-warp">
		<navigation-bar :path="pathName"></navigation-bar>
		<div class="user-page-content save-content">
			<table class="pay-table">
				<thead>
					<tr>
						<th>订单号</th>
						<th>FBA号</th>
						<th>下单时间</th>
						<th>费用类型</th>
						<th>金额</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody v-for="todo in userPayItems">
					<tr>
						<td class="order-id-td">{{todo.orderID}}</td>
						<td class="order-fba-td">{{todo.FBAID | FBAIDFilter}}<br>{{todo.startName}}到{{todo.endName}}</td>
						<td class="order-date-td">{{{todo.createDate | dateFormatFilter2}}}</td>
						<td class="order-name-td">订单费用</td>
						<td class="order-price-td">{{todo.totalPrice}}元</td>
						<td class="order-pay-td" @click="pay">
							<i class="money-icon"></i>支付
						</td>
					</tr>
					<tr v-if="todo.premium > 0">
						<td class="order-id-td">{{todo.orderID}}</td>
						<td class="order-fba-td">{{todo.FBAID | FBAIDFilter}}<br>{{todo.startName}}到{{todo.endName}}</td>
						<td class="order-date-td">{{{todo.createDate | dateFormatFilter2}}}</td>
						<td class="order-name-td">补交费用</td>
						<td class="order-price-td">{{todo.premium}}元</td>
						<td class="order-pay-td" @click="pay">
							<span class="order-td-desc">备注：{{todo.premiumDesc}}</span>
							<i class="money-icon"></i>支付
						</td>
					</tr>
				</tbody>
			</table>
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
	<pay-view :panle-show.sync="payPanle"></pay-view>
	<footer-component></footer-component>
</template>
<script src="../js/userPay.js" type="text/javascript"></script>
<style src="../style/userInfo.less" lang="less" scoped></style>