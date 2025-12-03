<!--
 * @Author: lmingul
 * @Date: 2025-11-28 02:27:28
 * @LastEditors: lmingul
 * @LastEditTime: 2025-12-03 18:17:18
 * @FilePath: \font-test\vue3-project\vue-first-app\src\App.vue
 * @Description: 
-->
<!--
 * @Author: lmingul
 * @Date: 2025-11-28 02:27:28
 * @LastEditors: lmingul
 * @LastEditTime: 2025-11-28 10:39:25
 * @FilePath: \font-test\vue3-project\vue-first-app\src\App.vue
 * @Description: 
-->
<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <Hello-World msg="Welcome to Your Vue.js App"></Hello-World> -->
    <!-- <easy-tree :treeData="treeData"></easy-tree> -->
    <easy-tree-new :treeData="treeData"></easy-tree-new>
  </div>
</template>

<script setup="">
// import EasyTree from "./components/EasyTree.vue";
import EasyTreeNew from "./components/EasyTreeNew.vue";

const treeData = [
  {
    id: "1",
    label: "一级1",
    childrens: [
      {
        id: "1-1",
        label: "一级1-1",
      },
      {
        id: "1-2",
        label: "一级1-1",
      },
    ],
  },
  {
    id: "2",
    label: "一级2",
    childrens: [
      {
        id: "2-1",
        label: "一级2-1",
        childrens: [
          {
            id: "2-1-1",
            label: "一级2-1-1",
            childrens: [
              {
                id: "2-1-1-1",
                label: "一级2-1-1-1",
              },
              {
                id: "2-1-1-2",
                label: "一级2-1-1-2",
              },
              {
                id: "2-1-1-3",
                label: "一级2-1-1-3",
              },
              {
                id: "2-1-1-4",
                label: "一级2-1-1-4",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    label: "一级3",
  },
];
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
