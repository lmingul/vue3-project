<!--
 * @Author: lmingul
 * @Date: 2025-12-03 17:52:18
 * @LastEditors: lmingul
 * @LastEditTime: 2025-12-04 15:11:19
 * @FilePath: \font-test\vue3-project\vue-first-app\src\components\EasyTreeNew.vue
 * @Description: 
-->
<template>
  <!-- 树形组件  -->
  <!-- 递归组件写法 -->
  <div class="tree-box">
    <ul>
      <li
        v-for="(item, index) in treeData"
        :key="`${item.id}-${index}`"
        @click.stop="toggleExpand(item.id)"
        class="tree-node"
      >
        <span :class="{ expanded: expandedState[item.id] }"> ▶ </span>
        <span>{{ item.label }}</span>
        <easy-tree-new
          v-if="expandedState[item.id] && item.childrens"
          :treeData="item.childrens"
        ></easy-tree-new>
      </li>
    </ul>
  </div>
</template>

<script setup="">
import { defineProps, reactive, provide, inject } from "vue";

const props = defineProps({
  treeData: {
    type: Array,
    default: () => [],
    required: true,
  },
  level: {
    type: Number,
    default: 0,
  },
});
// 展开状态管理：根节点创建并提供，子节点注入使用
let expandedState;

if (props.level === 0) {
  // 根节点：创建响应式状态并提供给所有子节点
  expandedState = reactive({});
  provide("expandedState", expandedState);
} else {
  // 子节点：注入根节点提供的状态
  expandedState = inject("expandedState");
}

// 切换展开状态
const toggleExpand = (nodeId) => {
  expandedState[nodeId] = !expandedState[nodeId];
};
</script>

<style>
.tree-box {
  /* user-select: none; */
  /* width: 200px;
  height: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px; */
}
ul {
  list-style: none;
}
.expanded {
  display: inline-block;
  transform: rotate(90deg);
  color: aqua;
}
.tree-node {
  cursor: pointer;
}
</style>
