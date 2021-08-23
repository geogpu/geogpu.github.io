
<template >
  <!-- 首页 -->
  <!-- <div class="index_box"> -->
    <!-- 2D首屏 快速二维首页 -->
    <Index2d class="qk_z2 qk_fullscreen"></Index2d>
    <div class="index_background qk_z1 qk_fullscreen"></div>

    <!-- 3D首层选择器 -->
    <div class="transScene qk_z3">
      <div
        @click="onChangeContents('../components/index/Index3dBabylonJS.vue')"
      >
        Index3dBabylonJS
      </div>
      <div @click="onChangeContents('../components/index/Index3dCesium.vue')">
        Index3dCesium
      </div>
      <div @click="onChangeContents('../components/index/Index3dFourJs.vue')">
        Index3dFourJs
      </div>
      <!-- </Suspense> TODO da -->
    </div>

    <!-- 异步加载3D页 加载后清除2D首屏 缓存 -->
    <keep-alive>
      <component
        class="index_start3d qk_z0 qk_fullscreen"
        :is="
          defineAsyncComponent({
            loader: Modeuls[currentTabComponent],
            timeout: 3000,
          })
        "
      ></component>
    </keep-alive>

  <!-- </div> -->
</template>

<script>
import {
  ref,
  reactive,
  onMounted,
  defineComponent,
  defineAsyncComponent,
} from "vue";

import Index2d from "../components/index/Index2d.vue";
// index 背景！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！加载未完成使用图片 liangceng   不同清晰度
// 加载完成后组件内抛出  执行外部页面完毕
// 配置项定义方式
export default defineComponent({
  components: { Index2d },
  name: "App",
  setup() {
    //vite加载指定路径的所有模块
    let currentTabComponent = ref("../components/index/Index3dCesium.vue");
    const Modeuls = import.meta.glob("../components/index/*");
    const onChangeContents = (URL) => {
      currentTabComponent.value = URL;
    };

    return {
      defineAsyncComponent,
      currentTabComponent,
      onChangeContents,
      Modeuls,
    };
  },
});
</script>

<style>
.index_box {
  width: 100%;
  height: 100%;
}
/* 仿真多星球或古风模式？？  左侧视线内星球列表*/
.index_start3d {
  /* touch-action: none; */
  /* 鼠标变图片   利用移动的飞船图片   场景内添加瞄准*/
  /* cursor: url("wish1.png"), auto; */
}
.index_background {
  /* background-image: url(../assets/img/index/start_background.PNG); */
  background-image: url(../assets/img/index/start_background0.PNG);
  background-size: cover;
  opacity: 0.5;
}
.transScene {
  position: absolute;
  left: 500px;
}

/* //点阵文字 */
</style>

