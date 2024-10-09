<template>
    <uni-drawer ref="slideMenu" mode="left">
        <view class="slide-menu">
            <view class="menu">
                <view v-for="item in MENU_ENUM" :key="item.value" class="item">
                    {{item.label}}
                </view>
            </view>
            <view class="operations">
                    <view v-for="item in OPERATION_ENUM" :key="item.value" class="item">
                    {{item.label}}
                </view>
            </view>
        </view>
    </uni-drawer>
</template>

<script>
const MENU_ENUM = [
    {
        value: 1,
        label: '商城记录',
        path: ''
    },
    {
        value: 2,
        label: '浏览记录',
        path: ''
    },
    {
        value: 3,
        label: '个人中心',
        path: ''
    },
    {
        value: 4,
        label: '消息通知',
        path: ''
    },
    {
        value: 5,
        label: '收藏夹',
        path: ''
    },
    {
        value: 5,
        label: '帮助',
        path: ''
    }
]
const OPERATION_ENUM = [
		{
			value: 1,
			label: '设置',
			path: ''
		},
		{
			value: 2,
			label: '退出',
			path: ''
		}
	]

export default {
    name: 'SlideMenu',
    data() {
        return {
            MENU_ENUM,
            OPERATION_ENUM
        }
    },
    methods: {
        handleOpen() {
            this.$refs.slideMenu.open();
        }
    },
}
</script>

<style lang="less" scoped>
.slide-menu {
	background: linear-gradient(to bottom, rgb(165,174,249), rgb(129,121,239));
    height: 100vh;
    padding-left: 30px;
    color: #fff;
    .menu {
        padding-top: 20vh;
        line-height: 2.6;
    }
    .operations {
        margin-top: 20vh;
        line-height: 5;
        font-size: 12px;
    }
}
</style>