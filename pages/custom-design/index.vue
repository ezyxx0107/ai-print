<template>
	<view class="custom-design">
		<view class="image-container">
			<view class="design-container">
				<image :src="backImg" mode="scaleToFill" class="basic-img" />
			</view>
		</view>
		<view class="submit-btn" @click="handleSubmit">点击确认</view>
		<view class="operations">
			<view class="delete-btn" @click="handleDelete">
				<uni-icons type="trash" size="30"></uni-icons>
			</view>
			<view class="alignment">
				<image src="/static/nav-car-active-icon.png" class="horizontal-alignment alignment-icon" @click="handleAlign('horizontal')" />
				<image src="/static/nav-car-icon.png" class="vertical-alignment alignment-icon" @click="handleAlign('vertical')"  />
			</view>
		</view>
		<view class="footer-btns">
			<view class="color-btn" @click="handleSelectColor">
				<image src="/static/nav-car-icon.png" />
				<view class="label">
					颜色
				</view>
			</view>
			<view class="ai-btn">
				<image src="/static/nav-car-icon.png" />
				<view class="label">
					AI库
				</view>
			</view>
			<view class="img-btn">
				<image src="/static/nav-car-icon.png" />
				<view class="label">
					图库
				</view>
			</view>
			<view class="text-btn">
				<image src="/static/nav-car-icon.png" />
				<view class="label">
					文字库
				</view>
			</view>
			<view class="special-effects-btn">
				<image src="/static/nav-car-icon.png" />
				<view class="label">
					效果
				</view>
			</view>
		</view>
		<!-- color popup -->
		<uni-popup ref="colorPopup" background-color="#fff" borderRadius="10px 10px 10px 10px" >
			<view class="color-label">
				选择颜色
			</view>
			<view class="color-options">
				<view class="white color-opt" @click="handleChangeColor
				('white')"></view>
				<view class="black color-opt" @click="handleChangeColor
				('black')"></view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
const BASIC_DATA = () => ({

});
	export default {
		name: 'CustomerDesign',
		data() {
			return {
				backImg: '/static/tshirt-img.jpeg',
				editData: BASIC_DATA()
			}
		},
		methods: {
			handleDelete() {
				this.editData = editData();
			},
			handleAlign(type) {
				console.log(type);
			},
			handleSelectColor() {
				this.$refs.colorPopup.open();
			},
			handleChangeColor(color) {
				switch(color) {
					case 'white': 
						this.backImg = '/static/tshirt-img.jpeg';
					default: 
						this.backImg = '/static/tshirt-img.jpeg';
				}
				this.$refs.colorPopup.close();
			},
			handleSubmit() {
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
			}
		},
	}
</script>

<style lang="less" scoped>
.custom-design {
	height: 100vh;
	background-color: #f5f5f5;
}
.design-container {
	height: 57vh;
	background-color: #fff;
	padding: 30px 20px;
}
.image-container {
	text-align: center;
}
.basic-img{
	display: block;
	margin: 0 auto;
	height: 100%;
}
.submit-btn {
	background: linear-gradient(to right, rgb(129,143,250), rgb(192,199,255));
	margin: 20px 15px;
	color: #fff;
	font-size: 18px;
	line-height: 42px;
	height: 42px;
	border-radius: 12px;
	text-align: center;
}
.operations {
	margin: 0 20px;
	padding-bottom: 60px;
	display: flex;
	justify-content: space-between;
}
.delete-btn, .alignment-icon {
	background-color: #fff;
	padding: 4px 2px;
	border-radius: 6px;
	&:not(:last-child) {
		margin-right: 10px;
	}
}
.alignment-icon {
	display: inline-block;
	width: 30px;
	height: 30px;
}
.footer-btns {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 16px 15px 30px;
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	text-align: center;
	.label {
		font-size: 14px;
		margin-top:8px;
		font-weight: bold;
	}
	image {
		display: block;
		width: 40px;
		height: 40px;
	}
}
.color-label {
	text-align: center;
	margin: 10px 0 10px;
}
.color-options {
	display: flex;
	justify-content: center;
	width: 60vw;
	margin-bottom: 10px;
	.color-opt {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		box-shadow: 10px 10px 10px rgba(0,0,0,0.3);
		justify-content: center;

		&.black {
			background-color: #000;
			margin-left: 20px;
		}
	}
}
</style>
