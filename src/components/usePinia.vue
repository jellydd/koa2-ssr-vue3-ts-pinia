<template>
  <div>
    <p>这是父组件传值-12312---123</p>
    <p> {{ props.data.name }}</p>
  </div>

  <div>{{ userStore.name }}</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user';
const userStore = useUserStore();

const props = defineProps(['data'])


</script>
