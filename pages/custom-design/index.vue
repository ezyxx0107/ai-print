<template>
	<view class="custom-design">
		<view class="image-container">
			<view class="design-container">
				<image :src="backImg" class="basic-img" />
			</view>
			<movable-area scale-area class="edit-img-area" :style="{width: `${DEFAULT_MOVABLE_AREA_BOX.width}px`,height: `${DEFAULT_MOVABLE_AREA_BOX.height}px`}">
				<movable-view  v-if="editText.visible" :x="editText.x" :y="editText.y" :animation="false" scale direction="all" class="movalbe-view" :style="{width: `${editText.w}px`,height: `${editText.h}px`}" @change="(e)=>handleMoveChange(e, 'editText')">
					<image :src="editText.path" class="edit-img" />
					<uni-icons type="closeempty" size="16" color="#fff" class="remove-icon" @click="handleRemove('editText')"></uni-icons>
				</movable-view>
				<movable-view  v-if="editImg.visible" :x="editImg.x" :y="editImg.y" :animation="false" scale direction="all" class="movalbe-view" :style="{width: `${editImg.w}px`,height: `${editImg.h}px`}" @change="(e)=>handleMoveChange(e, 'editImg')">
					<image :src="editImg.path" class="edit-img" />
					<uni-icons type="closeempty" size="16" color="#fff" class="remove-icon" @click="handleRemove('editImg')"></uni-icons>
				</movable-view>
			</movable-area>
		</view>
		<view class="submit-btn" @click="handleSubmit">点击确认</view>
		<view class="operations">
			<view class="delete-btn" @click="handleDelete">
				<uni-icons type="trash" size="36"></uni-icons>
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
			<view class="ai-btn" @click="handleSelectTemplate">
				<image src="/static/nav-car-icon.png" />
				<view class="label">
					模版
				</view>
			</view>
			<view class="img-btn"  @click="handleChooseImg">
				<image src="/static/nav-car-icon.png" />
				<view class="label">
					图库
				</view>
			</view>
			<view class="special-effects-btn" @click="handleEffect">
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
		<!--图库 popup	-->
		<uni-popup ref="imgPopup" background-color="#fff" borderRadius="10px 10px 10px 10px" >
			<view class="img-opt" @click="handleImg
				('add')">
				<text>直接上传</text>
				<uni-icons type="checkmarkempty" size="24" class="img-icon"></uni-icons>
			</view>
			<view class="img-opt" @click="handleImg
			('cut')">
				<text>抠图</text>
				<uni-icons type="checkmarkempty" size="24" class="img-icon"></uni-icons>
			</view>
		</uni-popup>
		<!-- 选择模版 -->
		<SearchTemplate ref="searchTemplate"  />
	</view>
</template>

<script>
import SearchTemplate from './search-template.vue';

	const DEFAULT_DATA = (data = {}) => ({
		visible:  false,
		id: Date.valueOf(),
		x: 0,
		y: 0,
		w: 100,
		h: 100,
		...data
	})
	const DEFAULT_MOVABLE_AREA_BOX = {
		height: 136,
		width: 100
	}

	export default {
		name: 'CustomerDesign',
		components: {
			SearchTemplate
		},
		data() {
			return {
				DEFAULT_MOVABLE_AREA_BOX,
				backImg: '/static/tshirt-img.jpeg',
				editImg: DEFAULT_DATA(),
				editText: DEFAULT_DATA()
			}
		},
		methods: {
			handleDelete() {
				this.editImg = DEFAULT_DATA();
				this.editText = DEFAULT_DATA();
			},
			handleAlign(type) {
				let editImgX = this.editImg.x; 
				let editImgY = this.editImg.y; 
				let editTextX = this.editText.x; 
				let editTextY = this.editText.y; 
				if (type === 'horizontal') {
					editImgX = (DEFAULT_MOVABLE_AREA_BOX.width - this.editImg.w)/2;
					editTextX = (DEFAULT_MOVABLE_AREA_BOX.width - this.editText.w)/2;
				}
				if (type === 'vertical') {
					editImgY = (DEFAULT_MOVABLE_AREA_BOX.height - this.editText.h)/2;
					editTextY = (DEFAULT_MOVABLE_AREA_BOX.height - this.editText.h)/2;
				}
				if (this.editImg.visible) {
					this.editImg = {
						...this.editImg,
						x: editImgX,
						y: editImgY
					}
				}
				if (this.editText.visible) {
					this.editText = {
						...this.editText,
						x: editTextX,
						y: editTextY
					}
				}
			},
			handleSelectColor() {
				this.$refs.colorPopup.open();
			},
			handleChangeColor(color) {
				switch(color) {
					case 'white': 
						this.backImg = '/static/tshirt-img.jpeg';
						break;
					default: 
						this.backImg = '/static/tshirt-img.jpeg';
						break;
				}
				this.$refs.colorPopup.close();
			},
			handleSelectTemplate() {
				this.$refs.searchTemplate.handleOpen();
			},
			handleChooseImg() {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						const { path, size } = res.tempFiles[0];
						// 需要限制图片大小 用size加判
						this.editImg = {
							...this.editImg,
							path
						};
						this.$refs.imgPopup.open()
					}
				})
			},
			handleImg(type) {
				if (type == 'add') {
					this.editImg.visible = true;
					this.$refs.imgPopup.close();
				}
				if (type == 'cut') {
					// uni.request({
					// 	method: 'POST',
					// 	url: '',
					// 	data: {
					// 		img: type.editImg.path
					// 	},
					// 	success: (res) => {
					// 		this.editImg = {
					// 			...this.editImg,
					// 			path:  res.data,
					// 			visible: true
					// 		}
					// 	},
					// 	fail: (error)=>{
					// 		uni.showToast({
					// 			title: error.msg,
					// 			icon: 'fail'
					// 		})
					// 	},
					// 	complete: () => {
					// 		this.$refs.imgPopup.close();
					// 	}
					// });
				}
			},
			handleRemove(key) {
				this[key] = DEFAULT_DATA();
			},
			handleEffect() {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						const {path, size} = res.tempFiles[0];
						// 需要限制图片大小 用size加判
						this.editImg = DEFAULT_DATA({
							path, 
							visible: true
						});
					}
				})

			},
			handleMoveChange(e, key) {
				const {x, y, source} = e.detail || {};
				if (!source) {
					return;
				}
				this.$set(this, key, {
					...this[key],
					x,
					y
				})
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
	position: relative;
}
.image-container {
	text-align: center;
}
.edit-img-area {
	border: 1px dashed #6C79F5;
	position: absolute;
	left: 50%;
    top: 30%;
    transform: translateX(-50%);
}
.remove-icon {
	position: absolute;
	left: -8px;
	top: -8px;
	border-radius: 50%;
	border: 1px solid #fff;
	width: 18px;
	height: 18px;
	text-align: center;
	line-height: 18px;
}
.movalbe-view {
	width: auto;
    height: auto;
}
.selection-img {
	width: 50px;
	height: 50px;
	display: block;
}
.basic-img{
	display: block;
	margin: 0 auto;
	width: 100%;
	height: 100%;
}
.edit-img {
	width: 100%;
	height: 100%;
}
.submit-btn {
	background: linear-gradient(to right, rgb(129,143,250), rgb(192,199,255));
	margin: 20px 15px;
	color: #fff;
	font-size: 20px;
	line-height: 46px;
	height: 46px;
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
	width: 40px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	display: inline-block;
	&:not(:last-child) {
		margin-right: 10px;
	}
}
.footer-btns {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 16px 15px 30px;
	display: flex;
	justify-content: space-around;
	background-color: #fff;
	text-align: center;
	>.label {
		font-size: 14px;
		margin-top:8px;
		font-weight: bold;
	}
	image {
		display: block;
		width: 40px;
		height: 40px;
		margin: 0 auto;
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
.img-opt {
	width: 60vw;
	padding: 10px 0;
	text-align: center;
	border-bottom: 1px solid #dfdfdf;
	text, .img-icon {
		vertical-align: middle;
		margin: 0 4px;
	}
}
</style>
