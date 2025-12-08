<!--
 * @Author: lmingul
 * @Date: 2025-11-28 02:27:28
 * @LastEditors: lmingul
 * @LastEditTime: 2025-12-08 18:32:12
 * @FilePath: \font-test\vue3-project\vue-first-app\src\App.vue
 * @Description: 
-->
<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <Hello-World msg="Welcome to Your Vue.js App"></Hello-World> -->
    <!-- <easy-tree :treeData="treeData"></easy-tree> -->
    <!-- <easy-tree-new :treeData="treeData"></easy-tree-new>

    <es-rate v-model="rateValue" :size="data.fontSize"></es-rate> -->
    <base-card>
      <the-header></the-header>
      <badge-list></badge-list>
      <user-info
        :full-name="activeUser.name"
        :info-text="activeUser.description"
        :role="activeUser.role"
      ></user-info>
    </base-card>
  </div>
</template>

<script>
import TheHeader from "./components/BadgeComponts/TheHeader.vue";
import BadgeList from "./components/BadgeComponts/BadgeList.vue";
import UserInfo from "./components/BadgeComponts/UserInfo.vue";

// import { ref } from "vue";
// import EasyTree from "./components/EasyTree.vue";
// import EasyTreeNew from "./components/EasyTreeNew.vue";
// import EsRate from "./components/EsRate.vue";

// const rateValue = ref(0);
// const treeData = [
//   {
//     id: "1",
//     label: "一级1",
//     childrens: [
//       {
//         id: "1-1",
//         label: "一级1-1",
//       },
//       {
//         id: "1-2",
//         label: "一级1-1",
//       },
//     ],
//   },
//   {
//     id: "2",
//     label: "一级2",
//     childrens: [
//       {
//         id: "2-1",
//         label: "一级2-1",
//         childrens: [
//           {
//             id: "2-1-1",
//             label: "一级2-1-1",
//             childrens: [
//               {
//                 id: "2-1-1-1",
//                 label: "一级2-1-1-1",
//               },
//               {
//                 id: "2-1-1-2",
//                 label: "一级2-1-1-2",
//               },
//               {
//                 id: "2-1-1-3",
//                 label: "一级2-1-1-3",
//               },
//               {
//                 id: "2-1-1-4",
//                 label: "一级2-1-1-4",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "3",
//     label: "一级3",
//   },
// ];
// const data = {
//   fontSize: "20",
// };

export default {
  components: { TheHeader, BadgeList, UserInfo },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
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
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
