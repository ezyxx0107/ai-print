<template>
	<view>
		<view class="tab-bar">
			<view v-for="(item,index) in tabs" :key="item.key" :class="['tab', {'active': activeKey == item.key, center: index == 1}]" @click="handleTurnPage(item)">
				<image v-if="activeKey != item.key" :src="item.defaultIcon" class="icon" />
				<image v-else :src="item.activeIcon" class="icon" />
				<view class="label">
					{{ item.label }}
				</view>
			</view>
		</view>
		<!-- 定制弹框 -->
		<uni-popup ref="designPopup" type="bottom" background-color="#fff" borderRadius="20px 20px" class="desig-popup">
			<view class="title">
				请选择产品定制
				<view class="close-btn" @click="handleClosePopup">
					×
				</view>
			</view>
			<view class="select-types">
				<view v-for="item in DESIGN_TYPES" :key="item.key" class="type" @click="handleTurnDesignPage(item)">
					<image :src="item.img" class="type-img" />
					<view class="label">
						{{item.label}}
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import { CUSTOM_DESIGN_PATH, DESIGN_TYPES } from '@/common/js/constant.js'



	export default{
		name: 'Tabbar',
		props: {
			activeKey: {
				require: true,
				default: 'home'
			}
		},
		data() {
			return {
				tabs: [
					{
						path: '/pages/index/index',
						defaultIcon: '/static/nav-car-icon.png',
						activeIcon: '/static/nav-car-active-icon.png',
						label: '首页',
						key: 'home',
						isTab: true
					},
					{
						path: CUSTOM_DESIGN_PATH,
						defaultIcon: '/static/nav-car-icon.png',
						activeIcon: '/static/nav-car-active-icon.png',
						label: '定制',
						key: 'design',
						isDesign: true
					},
					{
						path: '/pages/mine/index',
						defaultIcon: '/static/nav-car-icon.png',
						activeIcon: '/static/nav-car-active-icon.png',
						label: '我的',
						key: 'mine',
						isTab: true
					},
				],
				DESIGN_TYPES
			}
		},
		methods: {
			handleTurnPage(item) {
				if (item.isTab) {
					uni.switchTab({
						url: item.path
					})
					return;
				}
				if(item.isDesign) {
					this.$refs.designPopup.open();
				}
			},
			handleClosePopup() {
					this.$refs.designPopup.close();
			},
			handleTurnDesignPage(item) {
				uni.navigateTo({
					url: `${CUSTOM_DESIGN_PATH}?type=${item.value}`
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.tab-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
	  padding: 10px 10px 30px;
		display: flex;
		justify-content: space-between;
	}
	.tab{
		text-align: center;
		width: 30vw;
		font-size: 18px;
		&.active{
			color: #88B9F3;
		}
		.icon {
			display: inline-block;
			width: 30px;
			height: 30px;
		}
	}
	.center {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		padding: 10px;
		box-sizing: border-box;
		background-color: #fff;		
		position: absolute;
		top: -20px;
		left: 50%;
		transform: translateX(-50%);
		z-index: -1;
		.icon {
			width: 40px;
			height: 40px;
			padding-bottom: 8px;
		}
	}
	.label {
		margin-top: -4px;
	}

	.desig-popup {
		.title {
			position: relative;
			text-align: center;
			font-size: 20px;
			line-height: 1.5;
			color: #666;
			margin: 10px 0 20px;
			.close-btn {
				position: absolute;
				right: 10px;
				top: 0px;
				font-size: 24px;
				color: #999;
				line-height: 1;
				padding:0 10px;
			}
		}
		.select-types {
			display: flex;
			justify-content: space-around;
			text-align: center;
		}
		.type-img {
			display: inline-block;
			width: 40px;
			height: 40px;
			margin-bottom: 10px;
		}
	}
</style>