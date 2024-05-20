<script setup lang="ts">
import { ref } from "vue";
import { Pagination } from "@k-ui/components";

const pageInfo = ref({
  page: 1,
  pageSize: 10,
  total: 100,
});
</script>

<template>
  <k-button>测试按钮</k-button>
  <Pagination :pageInfo="pageInfo" />
</template>

<style scoped lang="less"></style>
