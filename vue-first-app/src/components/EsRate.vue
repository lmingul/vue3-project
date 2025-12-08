<!--
 * @Author: lmingul
 * @Date: 2025-12-04 15:49:39
 * @LastEditors: lmingul
 * @LastEditTime: 2025-12-04 17:11:23
 * @FilePath: \font-test\vue3-project\vue-first-app\src\components\EsRate.vue
 * @Description:  星级评价
-->
<template>
  <div>
    <!-- '★' : '☆' -->
    <span
      v-for="(item, index) in maxStart"
      :key="index"
      class="rate-box"
      :style="getStartStyle(item)"
      @click="startClick(item, index)"
      >☆</span
    >
    <span v-if="isShowValue">{{ startValue }}</span>
  </div>
</template>

<script setup="">
import { defineProps } from "vue";
const prop = defineProps({
  // v-model 绑定值
  startValue: {
    type: String,
    default: "",
  },
  // 最大星星数
  maxStart: {
    type: Number,
    default: 5,
  },
  isShowValue: {
    type: Boolean,
    default: false,
  },
  size: {
    type: [Number, String],
    default: "20",
  },
  color: {
    type: String,
    default: "#e5e510",
  },
});

const startClick = () => {};

// 计算星星的样式
const getStartStyle = () => {
  return {
    fontSize: prop.size + "px",
  };
};
</script>

<style scoped>
.rate-box {
  display: inline;
  margin-right: 5px;
  cursor: pointer;
}
</style>
