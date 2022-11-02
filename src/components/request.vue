<template>

</template>
<script setup lang="ts">
import API from '@/api';

const requestRes = async () => {
  let result = await API.login('zhangsan', '123456');
}

</script>

<style lang='less' scoped>

</style>