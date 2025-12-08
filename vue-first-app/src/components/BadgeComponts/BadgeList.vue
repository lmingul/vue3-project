<!--
 * @Author: lmingul
 * @Date: 2025-12-04 20:23:46
 * @LastEditors: lmingul
 * @LastEditTime: 2025-12-08 20:44:28
 * @FilePath: \font-test\vue3-project\vue-first-app\src\components\BadgeComponts\BadgeList.vue
 * @Description: 
-->
<template>
  <section>
    <base-card>
      <template v-slot:header>
        <h2>Available Badges</h2>
      </template>

      <template #nameList="slotProps">
        <p>{{ slotProps.datas }} {{ slotProps["another-prop"] }}</p>
        <p>{{ slotProps["another-prop"] }}</p>
      </template>
      <ul>
        <li>
          <base-badge type="admin" caption="ADMIN"></base-badge>
        </li>
        <li>
          <base-badge type="author" caption="AUTHOR"></base-badge>
        </li>
      </ul>
    </base-card>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>
