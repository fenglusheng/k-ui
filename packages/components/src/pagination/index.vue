<script setup lang="ts">
defineOptions({ name: "k-pagination" });
import { ConfigProvider, Pagination } from "ant-design-vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { computed } from "vue";

interface PageInfo {
  page: number;
  pageSize: number;
  total: number;
}

const props = defineProps<{ pageInfo: PageInfo }>();
const emits = defineEmits(["onPageChange"]);

const page = computed(() => props.pageInfo.page);
const pageSize = computed(() => props.pageInfo.pageSize);
const total = computed(() => props.pageInfo.total);

/**
 * 分页改变
 * @param current 当前页码
 * @param size 每页多少条
 */
function onPageChange(current: number, size: number) {
  if (size === pageSize.value) {
    emits("onPageChange", page);
  } else {
    emits("onPageChange", 1, size);
  }
}
</script>

<template>
  <div class="page">
    <ConfigProvider :locale="zhCN">
      <Pagination
        :current="page"
        :page-size="pageSize"
        :total="total"
        :show-total="(total, range) => `共${total}条，当前第${range[0]}页`"
        showQuickJumper
        showSizeChanger
        @change="onPageChange"
      />
    </ConfigProvider>
  </div>
</template>

<style scoped lang="less"></style>
