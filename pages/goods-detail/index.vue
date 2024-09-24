<template>
    <view class="goods-detail">
        <view class="goods-img">
            <image :src="detail.cover" mode="aspectFit" class="cover-img" />
        </view>
        <view class="info mv15">
            <view class="title ">
                {{detail.title}}
            </view>
            <view class="price">
                ¥{{detail.price}}
            </view>
            <view class="row">
                <view class="user">
                    <image :src="detail.profile" class="profile" />
                    <view class="nickname">
                        {{detail.nickname}}
                    </view>
                </view>
                <view class="collections">
                    <uni-icons type="star" size="20" color="#999"></uni-icons>
                    <view class="collection-count">
                        {{detail.collections}}
                    </view>
                </view>
            </view>
            <view class="select-size">
                <view class="label">请选择尺码</view>
                <view v-for="size in SIZE" :key="size.value" :class="['size', {active: currentSize == size.value}]">
                    {{ size.label }}
                </view>
            </view>
            <view class="row">
                <view class="label">
                    数量
                </view>
                <uni-number-box v-model="vModelValue" :min="1" @change="handleClickCount"></uni-number-box>
            </view>
        </view>
        <view class="detail-img">
            <view class="title">详情</view>
            <image :src="detail.detailImg" mode="widthFix" class="info-img" />
        </view>
        <uni-goods-nav :fill="true"  :options="nacEnum" :buttonGroup="buttonGroup" class="nav" @click="handleCollected" @buttonClick="handleAddCart" /> />
    </view>
</template>

<script>
import { SIZE } from '@/common/js/constant.js';

export default {
    name: 'GoodsDetail',
    data() {
        return {
            SIZE,
            nacEnum: [
                {
					icon: 'heart',
					text: '点赞'
				}, {
					icon: 'star',
					text: '收藏'
				}, {
					icon: 'cart',
					text: '购物车'
				}
            ],
            buttonGroup: [
                {
                    text: '立即购买',
                    backgroundColor: 'linear-gradient(to right, rgb(192,199,255), rgb(129,143,250))',
                    color: '#fff'
                }
            ],
            currentSize: 'S',
            count: 1,
            detail: {
                id: 1,
                title: '黑色T恤 小绵羊 短袖',
                cover: '/static/tshirt-img.jpeg',
                price: 56,
                profile: '/static/nav-car-active-icon.png',
                nickname: '我家都是小星星呀创作我家都是小星星呀创作我家都是小星星呀创作',
                collections: 1299,
                detailImg: '/static/detail-img.png'
            }
        }
    },
    onLoad (options) {
        const { id } = options;
        this.getDetail(id);
    },
    methods: {
        getDetail(id) {
            if(!id) {
                uni.showToast({
                    title: '获取详情失败，请重试',
                    icon: 'error',
                    mask: true,
                    complete: () => {
                        setTimeout(() => {
                            uni.navigateBack();
                        }, 1500);
                    }
                });
                return;
            }
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
        handleClickCount(count) {
            this.count = count;
        },
        handleCollected({content}) {
            console.log(content);
        },
        handleAddCart() {
            uni.navigateTo({
                url: `/pages/pay/index?id=${this.detail.id}`
            })
        }
    },
}
</script>

<style lang="less" scoped>
    .goods-detail {
        background-color: #f5f5f5;
    }
    .goods-img {
        height: 40vh;
        text-align: center;
        .cover-img {
            width: 100%;
            height: 100%;
        }
    }
    .info {
        padding: 20px 15px;
        background-color: #fff;
        border-radius: 20px 20px 0 0;
    }
    .title, .price {
        font-size: 20px;
        font-weight: bold;
    }
    .row {
        display: flex;
        justify-content: space-between;
        align-content: center;
        margin: 6px 0;
    }
    .user {
        .profile {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            margin-right: 4px;
            vertical-align: middle;
        }
        .nickname {
            vertical-align: middle;
            display: inline-block;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            font-size: 14px;
            color: #666;
            width: 64vw;
        }
    }
    .collections {
        color: #999;
        text-align: center;
    }
    .collection-count {
        font-size: 14px;
    }
    .select-size {
        margin-bottom: 10px;
        .label {
            font-size: 14px;
            color: #999;
            margin-bottom: 6px;
        }
        .size {
            display: inline-block;
            margin-right: 8px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #dfdfdf;
            font-size: 13px;
            line-height: 30px;
            text-align: center;
        }
    }
    .detail-img {
        margin: 10px 15px;
        padding-bottom: 80px;
        .info-img{
            display: block;
            margin: 4px auto;
        }
    }
    .nav {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        padding-bottom: 30px;
        background-color: #fff;;
    }
</style>