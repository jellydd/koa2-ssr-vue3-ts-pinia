<template>
  <!-- <img alt="Vue logo" src="./../assets/vue.svg" /> -->
  <div>
    <UsePinia :data="reactiveData"/>
  </div>

  <!-- 
  <br />
  <router-link to="/login">点击跳转至login123</router-link>
  <br /><br />
  <router-link to="/vueUse">点击跳转至vueUse页面</router-link>
  <br /><br />
  <router-link to="/request">点击跳转至request请求页面</router-link> -->
  <p>ref API---{{ refData }}</p>
  <p>reactive API---{{ reactiveData }}</p>
  <el-button @click="changeData">change</el-button>
</template>

<script setup lang="ts"> 
import { ref, reactive } from 'vue';
import UsePinia from '@/components/usePinia.vue';


const refData = ref('父组件的值')
const reactiveData = reactive({ name: "haha" })


function changeData() {
  refData.value = 'world'
  reactiveData.name = 'llll'
}
</script>
