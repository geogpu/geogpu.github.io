
<template >
  <!-- 首页 -->
  <!-- <div class="index_box"> -->
  <!-- 2D首屏 快速二维首页 -->
  <Index2d class="qk_z2 qk_fullscreen"></Index2d>
  <div class="index_background qk_z1 qk_fullscreen"></div>

  <!-- 3D首层选择器 -->
  <div class="transScene qk_z3">
    <select @change="selectLink($event)">
      <option value="../components/index/Index3dCesium.vue"> Index3dCesium </option>
      <option value="../components/index/Index3dBabylonJS.vue"> Index3dBabylonJS </option>
      <option value="../components/index/Index3dFourJs.vue"> Index3dFourJs </option>
    </select>
  </div>
  <!-- 3D首层选择器 -->
  <div class="transScene qk_z3">
    <select @change="keyControl($event)">
      <option value="F1"> F1全屏开关 </option>
      <option value="f2"> f2 </option>
      <option value="f3"> f3 </option>
    </select>
  </div>

  <!-- 异步加载3D页 加载后清除2D首屏 缓存 -->
  <keep-alive>
    <component class="index_start3d qk_z0 qk_fullscreen"
               :is=" defineAsyncComponent({loader: Modeuls[currentTabComponent],timeout: 3000,})">
    </component>
  </keep-alive>

  <!-- </div> -->
</template>

<script>
import { ref, reactive, onMounted, defineComponent, defineAsyncComponent } from "vue";

import Index2d from "../components/index/Index2d.vue";
// index 背景！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！加载未完成使用图片 liangceng   不同清晰度
// 加载完成后组件内抛出  执行外部页面完毕
// 配置项定义方式
export default defineComponent({
  components: { Index2d },
  name: "App",
  setup () {
    //vite加载指定路径的所有模块
    let currentTabComponent = ref("../components/index/Index3dCesium.vue");
    const Modeuls = import.meta.glob("../components/index/*");
    const onChangeContents = URL => { currentTabComponent.value = URL };
    // 选择的链接
    const selectLink = event => { onChangeContents(event.target.value) };


    // 键盘事件 鼠标
    document.onkeydown = event => {
      // 清除本次默认动作
      event.preventDefault();
      console.log(event)
    }

    document.oncontextmenu = event => {
      var clintX = event.clientX;  //ev获取的只是屏幕可视范围的x,y值
      var clintY = event.clientY;
      console.log(clintX, clintY)
      return false;  //阻止鼠标右键菜单出现
    }

    let div = document.querySelector('body')
    const keyControl = event => {
      switch (event.target.value) {
        case 'F1':
          console.log('全屏')
          if (div.requestFullScreen) {
            div.requestFullScreen()
          } else if (div.webkitRequestFullScreen) {
            div.webkitRequestFullScreen()
          } else if (div.mozRequestFullScreen) {
            div.mozRequestFullScreen()
          } else if (div.msRequestFullScreen) {
            div.msRequestFullScreen()
          } else if (oRequestFullScreen) {
            div.oRequestFullScreen()
          }
          break;

        default:
          break;
      }
    };



    return {
      defineAsyncComponent,
      currentTabComponent,
      onChangeContents,
      Modeuls,
      selectLink,
      keyControl
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
  /* position: absolute; */
  margin: 0 auto; /*平居中*/
  /* left: 500px; */
}

/* //点阵文字 */
</style>

