<template>
  <img alt="Vue logo" src="./../assets/vue.svg" />
  <UsePinia />
  <br />
  <router-link to="/login">点击跳转至login</router-link>
  <br /><br />
  <router-link to="/vueUse">点击跳转至vueUse页面</router-link>
  <br /><br />
  <router-link to="/request">点击跳转至request请求页面</router-link>
</template>

<script setup lang="ts">
  import UsePinia from '@/components/UsePinia.vue';
</script>
