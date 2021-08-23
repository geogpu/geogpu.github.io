<template>
	<p @click="onChangeContents('../components/index/Index3d.vue')">testbaby</p>
	<p @click="onChangeContents('../components/index/Index2d.vue')">test2d</p>
	<p>{{currentTabComponent}}</p>
	<!-- <Suspense> -->
	<component :is="DefineAsyncComponent({
					// 工厂函数
					loader: Modeuls[currentTabComponent],
					// // 默认值：Infinity（即永不超时，单位 ms）
					timeout: 3000,
				})"></component>
	<!-- </Suspense> -->
</template>
<script >
	import {
		defineComponent,
		defineAsyncComponent,
		reactive,
		ref
	} from 'vue'
	export default defineComponent({
		name: 'App',
		setup() {
			//vite加载指定路径的所有模块
			const Modeuls = import.meta.glob('../components/index/*');
			const onChangeContents = function(URL) {
				currentTabComponent.value = URL;
				console.log(currentTabComponent)
			}
			let currentTabComponent = ref('../components/index/Index2dwith3d.vue');
			const DefineAsyncComponent = defineAsyncComponent;
			return {
				DefineAsyncComponent,
				currentTabComponent,
				onChangeContents,
				Modeuls
			}
		},
	})
</script>
