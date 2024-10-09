<template>
	<view class="mine">
		<view class="container">
			<view class="info"  @click="handleOpenSlideMenu">
				<image :src="info.profile" class="profile" />
				<view class="name-id">
					<view class="name">{{info.nickname}}</view>
					<view class="id">ID: {{info.id}}</view>
				</view>
			</view>
			<view class="follow">
				<text class="mr20">关注：{{info.follow}}</text>
				<text>粉丝：{{info.following}}</text>
			</view>
		</view>
		<view class="orders card">
			<view class="order-title" @click="handleCheckOrders()">
				<view class="title">我的订单</view>
				<view class="icon">
					<uni-icons type="right" size="22"></uni-icons>
				</view>
			</view>
			<view class="type">
				<view v-for="item in TYPE_ENUM" :key="item.value" class="type-item" @click="handleCheckOrders(item.value)">
					<image :src="item.icon" class="type-icon" />
					<view class="label">
						{{item.label}}
					</view>
				</view>
			</view>
		</view>
		<view class="others card">
			<view v-for="item in SERVICE_ENUM" :key="item.value" class="item" @click="handleTurnPage(item.path)">{{item.label}}</view>
		</view>
		<SlideMenu ref="slideMenuDrawer" />
		<Tabbar activeKey="mine" />
	</view>
</template>

<script>
	import Tabbar from '@/components/tabbar';
	import SlideMenu from './slide-menu.vue';

	const TYPE_ENUM = [
		{
			value: 1,
			label: '待付款',
			icon: '/static/nav-car-icon.png'
		},
		{
			value: 2,
			label: '待发货',
			icon: '/static/nav-car-icon.png'
		},
		{
			value: 3,
			label: '待收货',
			icon: '/static/nav-car-icon.png'
		},
		{
			value: 4,
			label: '待评价',
			icon: '/static/nav-car-icon.png'
		},
	]

	const SERVICE_ENUM = [
		{
			value: 1,
			label: '交易记录',
			path: ''
		},
		{
			value: 2,
			label: '平台客服',
			path: ''
		}
	]
	
	export default {
		name: 'Mine',
		components: {
			Tabbar,
			SlideMenu
		},
		data() {
			return {
				TYPE_ENUM,
				SERVICE_ENUM,
				info: {
					profile: '/static/couple.png',
					nickname: '我家都是小星星呀创作',
					id: 123456,
					follow: 10,
					following: 12
				}
			}
		},
		methods: {
			handleCheckOrders(type='') {
				const url = `/pages/orders?type=${type}`;
				this.handleTurnPage(url);
			},
			handleTurnPage(url='') {
				if (!url) {
					return;
				}
				uni.navigateTo({
					url
				})
			},
			handleOpenSlideMenu() {
				this.$refs.slideMenuDrawer.handleOpen()
			}
		},
	}
</script>

<style lang="less" scoped>
.mine {
	background-color: #f5f5f5;
	height: 100vh;
}
.container {
	background-color: rgb(165,174,249);
	padding: 10px;
	margin-bottom: 20px;
}
.info {
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	.profile {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		margin-right: 20px;
	}
	.id {
		color: #666;
		font-size: 12px;
	}
}
.follow {
	font-size: 12px;
	margin: 10px 12px;
}
.card {
	background-color: #fff;
	border-radius: 20px;
	margin: 0 10px 20px;
}
.orders {
	padding: 10px 20px;
	text-align: center;
	.order-title, .type {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex: 1;
	}
	.order-title {
		margin-bottom: 14px;
		font-size: 14px;
	}
	.type-icon {
		width: 30px;
		height: 30px;
	}
	.label {
		font-size: 12px;
		color: #666;
	}
}
.others {
	.item {
		padding:10px 15px;
		line-height: 2;
		color: #646464;
		&:not(:last-child) {
			border: 1px solid #f5f5f5;
		}
	}
}
</style>