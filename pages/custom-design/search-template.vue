<template>
    <uni-popup ref="searchPopup" background-color="#f5f5f5">
        <view class="search-template">
            <view class="search-title">
                <uni-icons type="left" class="title-icon" size="28" @click="handleBack"></uni-icons>
                <uni-search-bar v-model="searchValue" placeholder="点击输入文字" radius="100"  class="search-bar" @confirm="handleSearch" @cancel="handleClear" @clear="handleClear">
                </uni-search-bar>
            </view>
            <uni-collapse v-show="collapseVisible" ref="collapse" :value="collapseValue" @change="handleopen">
                <uni-collapse-item name="category" title="分类">
                    <view class="category">
                       <view class="category-item" @click="handleSelectCategory('all')">
                            <view class="all">全部</view>
                       </view>
                        <view v-for="item in categoryEnum" :key="item.id" class="category-item" @click="handleSelectCategory(item.id)">
                            <image :src="item.cover" class="category-cover" />
                            <view class="category-label">
                                {{item.label}}
                            </view>
                        </view>
                    </view>
                </uni-collapse-item>
            </uni-collapse>
            <!--  -->
             <scroll-view v-if="templateListVisible" scroll-y="true"
					@scrolltolower="handleGetMore">
               <view class="template-list">
                    <view class="waterfall-item" v-for="(item) in templateList" :key="item.id">
                    <image :src="item.cover" mode="aspectFit" class="card-img" />
                        <view class="label">
                            {{item.title}}
                        </view>
                        <view class="user-info">
                            <image :src="item.profile" class="profile" />
                            <view class="nickname">{{item.nickname}}</view>
                        </view>
                    </view>
               </view>
             </scroll-view>
        </view>
    </uni-popup>
</template>

<script>
export default {
    name: 'SearchTemplate',
    data() {
        return {
            searchValue: '',
            collapseVisible: true,
            collapseValue: ["category"],
            categoryEnum: [
                {
                    id: 1,
                    cover: '/static/tshirt-img.jpeg',
                    label: '动漫'
                },
                {
                    id: 1,
                    cover: '/static/tshirt-img.jpeg',
                    label: '动漫'
                },
                {
                    id: 1,
                    cover: '/static/tshirt-img.jpeg',
                    label: '动漫'
                },
                {
                    id: 1,
                    cover: '/static/tshirt-img.jpeg',
                    label: '动漫'
                },
                {
                    id: 1,
                    cover: '/static/tshirt-img.jpeg',
                    label: '动漫'
                },
                {
                    id: 1,
                    cover: '/static/tshirt-img.jpeg',
                    label: '动漫'
                },
                {
                    id: 1,
                    cover: '/static/tshirt-img.jpeg',
                    label: '动漫'
                },
                {
                    id: 1,
                    cover: '/static/tshirt-img.jpeg',
                    label: '动漫'
                },
                {
                    id: 1,
                    cover: '/static/tshirt-img.jpeg',
                    label: '动漫'
                },
                {
                    id: 1,
                    cover: '/static/tshirt-img.jpeg',
                    label: '动漫'
                },
            ],
            templateListVisible: false,
            templateList: [
                {
                    id: '1',
                    title: '黑色T恤 小绵羊 短袖',
                    image: '/static/tshirt-img.jpeg',
                    profile: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: 11,
                    title: '黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖',
                    cover: '/static/tshirt-img.jpeg',
                    image: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: '1',
                    title: '黑色T恤 小绵羊 短袖',
                    image: '/static/tshirt-img.jpeg',
                    profile: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: 11,
                    title: '黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖',
                    cover: '/static/tshirt-img.jpeg',
                    image: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: '1',
                    title: '黑色T恤 小绵羊 短袖',
                    image: '/static/tshirt-img.jpeg',
                    profile: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: 11,
                    title: '黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖',
                    cover: '/static/tshirt-img.jpeg',
                    image: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: '1',
                    title: '黑色T恤 小绵羊 短袖',
                    image: '/static/tshirt-img.jpeg',
                    profile: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: 11,
                    title: '黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖',
                    cover: '/static/tshirt-img.jpeg',
                    image: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: '1',
                    title: '黑色T恤 小绵羊 短袖',
                    image: '/static/tshirt-img.jpeg',
                    profile: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: 11,
                    title: '黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖',
                    cover: '/static/tshirt-img.jpeg',
                    image: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: '1',
                    title: '黑色T恤 小绵羊 短袖',
                    image: '/static/tshirt-img.jpeg',
                    profile: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: 11,
                    title: '黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖',
                    cover: '/static/tshirt-img.jpeg',
                    image: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: '1',
                    title: '黑色T恤 小绵羊 短袖',
                    image: '/static/tshirt-img.jpeg',
                    profile: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: 11,
                    title: '黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖',
                    cover: '/static/tshirt-img.jpeg',
                    image: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: '1',
                    title: '黑色T恤 小绵羊 短袖',
                    image: '/static/tshirt-img.jpeg',
                    profile: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: 11,
                    title: '黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖',
                    cover: '/static/tshirt-img.jpeg',
                    image: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: '1',
                    title: '黑色T恤 小绵羊 短袖',
                    image: '/static/tshirt-img.jpeg',
                    profile: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                {
                    id: 11,
                    title: '黑色T恤 小绵羊小绵羊小绵羊小绵羊 短袖',
                    cover: '/static/tshirt-img.jpeg',
                    image: '/static/nav-car-active-icon.png',
                    nickname: '我家都是小星星呀创作',
                },
                
            ]
        }
    },
    methods: {
        handleOpen() {
            this.$refs.searchPopup.open();
            this.$nextTick(() => {
				this.$refs.collapse.resize()
			})
        },
        handleBack() {
            this.$refs.searchPopup.close();
            this.collapseVisible = true;
            this.templateListVisible = false;

        },
        handleSearch(e) {
            console.log(e);
            // uni.request({
            // 	url: '',
            // 	data: {
            // 		search: e.value
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
        handleClear() {
            this.searchValue = '';
        },
        handleopen(e) {
            console.log(e);
        },
        handleSelectCategory(type) {
            // uni.request({
            // 	url: '',
            // 	data: {
            // 		type: data.value
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
            this.collapseVisible = false;
            this.templateListVisible = true;
        },
        handleSelected(data = {}) {
        },
        handleGetMore() {
            console.log('====');
        },
    },
}
</script>

<style lang="less" scoped>
.search-template {
    width: 100vw;
    height: 100vh;
}
.search-title {
    padding-left: 10px;
    background-color: #fff;
    line-height: 56px;
}
.search-bar {
    display: inline-block;
    width: 88vw;
}
.category {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-between;
    padding: 10px 20px;
    .category-item {
        width: 16vw;
        margin-bottom: 10px;
    }
    .all {
        margin: 0 auto 10px;
        width: 50px;
        height: 50px;
        line-height: 50px;
        border-radius: 10px;
        box-shadow: 2px 10px 10px rgba(0,0,0,0.3);
    }
    .category-cover {
        width: 50px;
        height: 50px;
        border-radius: 10px;
    }
}

.template-list {
    margin: 10px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 86vh;
}
.waterfall-item {
    width: 40vw;
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
            width: 34vw;
        }
    }
}
</style>