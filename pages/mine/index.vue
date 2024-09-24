<template>
	<view class="mine">
		mine page
		
		<Tabbar activeKey="mine" />
	</view>
</template>

<script>
	import Tabbar from '@/components/tabbar';
	
	export default {
		name: 'Mine',
		components: {
			Tabbar
		}
	}
</script>

<style>
</style>