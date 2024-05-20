<script setup lang="ts">
defineOptions({ name: "k-button" });
import { computed } from "vue";

type ButtonProps = {
  type?: "primary" | "default" | "link" | "text";
  shape?: "default" | "circle" | "round";
  size?: "mini" | "small" | "middle" | "big" | "large";
  block?: boolean;
  ghost?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

const buttonProps = withDefaults(defineProps<ButtonProps>(), {
  type: "primary",
  shape: "default",
  size: "middle",
});
const emits = defineEmits(["click"]);

const buttonClass = computed(() => {
  return {
    [`k-button--${buttonProps.type}`]: buttonProps.type,
    [`k-button--${buttonProps.shape}`]: buttonProps.shape,
    [`k-button--${buttonProps.size}`]: buttonProps.size,
    "k-button--block": buttonProps.block,
    "k-button--ghost": buttonProps.ghost,
    "k-button--disabled": buttonProps.disabled,
    "k-button--loading": buttonProps.loading,
  };
});

function onClick() {
  if (buttonProps.disabled) return;
  emits("click");
}
</script>

<template>
  <div class="k-button" :class="buttonClass" @click.stop="onClick">
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
@import "./style/index.less";
</style>
