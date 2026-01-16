<script setup>
import { RouterView } from 'vue-router'
// 必须 import，否则页面是空白的，控制台会报错
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>


<template>
  <div class="page">
    <HeaderComponent />

    <main class="content">
      <router-view />
    </main>

    <FooterComponent />
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.page {
  min-height: 100vh;
  /* 关键：撑满屏幕高度 */
  display: flex;
  flex-direction: column;
  /* 竖向布局 */
}

.content {
  flex: 1;
  /* 关键：内容区域自动撑开，把footer顶到底部 */
}
</style>
