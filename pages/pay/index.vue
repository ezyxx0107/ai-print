<template>
	<view class="pay">
		<view class="address card">
			<view class="icon">
				<uni-icons type="location" size="20" color="#525252"></uni-icons>
			</view>
			<view class="address-text">
				<view>
					{{ addresssInfo.address }}
				</view>
				<view>
					收件人：{{ addresssInfo.name }}
				</view>
			</view>
			<view class="icon" @click="handleEditAddress">
				<uni-icons type="right" size="22" color="#525252"></uni-icons>
			</view>
		</view>
		<view v-for="item in goods" :key="item.id" class="goods card">
			<view class="info">
				<image :src="item.cover" class="cover" mode="widthFix" />
				<view>
					<view class="title">{{ item.title }}</view>
					<view class="size">{{ item.size }}码</view>
					<view class="price">¥{{ item.price }}</view>
				</view>
			</view>
			<view class="count">× {{ item.count }}</view>
		</view>
		<view class="pay-btn" @click="handlePay">立即支付</view>
	</view>
	
</template>

<script>

export default {
    name: 'Pay',
	data() {
		return {
			addresssInfo: {
				address: '湖北省武汉市江岸区后湖大道青松园路汉口花园2号5栋二单元803',
				name: 'xxx'
			},
			goods: [
				{
					id: 4,
					title: '黑色T恤 小绵羊 短袖',
					cover: '/static/tshirt-img.jpeg',
					size: 'S',
					price: 36,
					count: 1
				}
			],
			selections: []
		}
	},
	methods: {
		handlePay() {
			// uni.request({
			// 	url: '',
			// 	data: {
			// 		type: type.value
			// 	},
			// 	success: (res) => {
			// 		console.log(res.data);
			// 	},
			// fail: (error)=>{
			// 	uni.showToast({
			// 		title: error.msg,
			// 		icon: 'fail'
			// 	})
			// }
			// });
		},
		handleEditAddress() {
			
		}
	},
}
</script>

<style lang="less" scoped>
.pay {
	height: 100vh;
	background-color: #f5f5f5;
	padding: 10px 15px 100px;
	box-sizing: border-box;
}
.card {
	border-radius: 14px;
	background-color: #fff;
	padding: 15px;
	display: flex;
	align-items: center;
	box-shadow: 10px 15px 10px rgba(0,0,0,0.2);
	margin-bottom: 20px;
}
.address-text {
	color: #979797;
	margin: 0 15px;
	width: 80%;
}
.goods {
	justify-content: space-between;
	.info {
		display: flex;
	}
	.cover {
		display: block;
		width: 56px;
		margin-right: 10px;
	}
	.title {
		font-size: 16px;
		font-weight: bold;
	}
	.size {
		padding: 2px 10px;
		background-color: #EBEBEB;
		color: #707070;
		border-radius: 10px;
		width: fit-content;
		margin: 6px 0;
		font-size: 12px;
	}
}
.pay-btn {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: linear-gradient(to right, rgb(129,143,250), rgb(146, 174, 248), rgb(201,163,251));
	color: #fff;
	border-radius: 20px;
	width: 80vw;
	margin: 20px auto 30px;
	font-size: 16px;
	line-height: 36px;
	height: 36px;
	text-align: center;
}
</style>