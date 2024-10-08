<template>
	<view class="tab-page-container">
		<view class="banner">
			<!-- banner我是截图 自行替换 -->
		<image :src="bannerImg" class="banner"></image>
		</view>
		<view class="select-types">
			<view v-for="item in DESIGN_TYPES" :key="item.key" class="type" @click="handleType(item)">
				<image :src="item.img" class="type-img" />
				<view class="label">
					{{item.label}}
				</view>
			</view>
		</view>
		<view class="home-container">
			<view class="title">
				时尚广场
			</view>
			<view class="scroll-view">
				<view v-for="item in goods" :key="item.id" class="goods-item" @click="handleDesign(item)">
					<image :src="item.cover" mode="aspectFit" class="card-img" />
					<view class="label">
						{{item.title}}
					</view>
					<view class="user-info">
						<image :src="item.profile" class="profile" />
						<view class="nickname">{{item.nickname}}</view>
						<view class="design-btn">做同款</view>
					</view>
				</view>
			</view>
		</view>
		<Tabbar activeKey="home" />
	</view>
</template>

<script>
	import { DETAIL_PATH, DESIGN_TYPES } from '@/common/js/constant.js'
	import Tabbar from '@/components/tabbar';
	
	export default {
		name: 'Home',
		components: {
			Tabbar
		},
		data() {
			return {
				DESIGN_TYPES,
				bannerImg: '/static/banner-img.png',
				goods: [
					{
						id: '',
						title: '黑色T恤 小绵羊 短袖',
						cover: '/static/tshirt-img.jpeg',
						profile: '/static/nav-car-active-icon.png',
						nickname: '我家都是小星星呀创作',
					},
					{
						id: 11,
						title: '黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖',
						cover: '/static/tshirt-img.jpeg',
						profile: '/static/nav-car-active-icon.png',
							nickname: '我家都是小星星呀创作',
					},
					{
						id: 2,
						title: '黑色T恤 小绵羊 短袖',
						cover: '/static/tshirt-img.jpeg',
						profile: '/static/nav-car-active-icon.png',
							nickname: '我家都是小星星呀创作',
					},
					{
						id: 3,
						title: '黑色T恤 小绵羊 短袖',
						cover: '/static/tshirt-img.jpeg',
						profile: '/static/nav-car-active-icon.png',
							nickname: '我家都是小星星呀创作',
					},
					{
						id: 4,
						title: '黑色T恤 小绵羊 短袖',
						cover: '/static/tshirt-img.jpeg',
						profile: '/static/nav-car-active-icon.png',
							nickname: '我家都是小星星呀创作',
					}
				]
			}
		},
		onPageScroll(arg) {
			console.log(arg);
		},
		created () {
			this.getBanner();
		},
		methods: {
			getBanner() {
				// uni.request({
				// 	url: '',
				// 	success: (res) => {
				// 		this.bannerImg = res.data;
				// 	},
				// fail: (error)=>{
				// 	uni.showToast({
				// 		title: error.msg,
				// 		icon: 'fail'
				// 	})
				// }
				// });
			},
			handleType(type) {
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
			handleDesign(item) {
				uni.navigateTo({
					url: `${DETAIL_PATH}?id=${item.id}`
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.banner {
		height: 140px;
		width: 100vw;
	}
	.select-types {
		display: flex;
		justify-content: space-around;
		text-align: center;
		margin: 20px 0;
	}
	.type-img {
		display: inline-block;
		width: 40px;
		height: 40px;
		margin-bottom: 10px;
	}
	.home-container {
		margin: 10px;
		.title {
			font-size: 20px;
			margin: 0 0 10px 20px;
		}
		.scroll-view {
			background: linear-gradient(rgb(200,170,249), #fff);
			min-height: 56vh;
			border-radius: 20px;
			padding: 10px;
			box-sizing: border-box;
		}
	}
	.scroll-view {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.goods-item {
		width: 42%;
		background-color: #fff;
		border-radius: 20px;
		padding: 10px;
		margin-bottom: 10px;
		.card-img {
			display: inline-block;
			width: 100%;
			height: 120px;
		}
		.label {
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow:hidden;
			text-overflow:ellipsis;
			margin-bottom: 6px;
			font-size: 16px;
			font-weight: bolder;
		}
		.user-info {
			display: flex;
			align-items: center;
			justify-content: space-between;
			.profile {
				width: 20px;
				height: 20px;
				border-radius: 50%;
				margin-right: 4px;
			}
			.nickname {
				overflow:hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
				font-size: 12px;
				color: #999;
				width: 19vw;
			}
			.design-btn{
				background: linear-gradient(to right, rgb(129,143,250), rgb(192,199,255));
				color: #fff;
				border-radius: 20px;
				font-size: 12px;
				padding: 0 4px;
			}
		}
	}
</style>
