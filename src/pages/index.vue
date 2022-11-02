<script setup lang='ts'>
import { ref } from "vue";
const name = ref('li1123')
function changeName() {
  name.value = '123'
}
</script>
<template>
  <p>这是首页</p>
  <el-button @click="changeName">I am ElButton</el-button>
  <div>{{ name }}</div>
</template>
<style lang='less' scoped>

</style>