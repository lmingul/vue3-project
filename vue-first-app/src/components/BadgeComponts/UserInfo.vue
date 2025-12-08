<!--
 * @Author: lmingul
 * @Date: 2025-12-04 20:23:46
 * @LastEditors: lmingul
 * @LastEditTime: 2025-12-08 19:08:36
 * @FilePath: \font-test\vue3-project\vue-first-app\src\components\BadgeComponts\UserInfo.vue
 * @Description: 
-->
<template>
  <section>
    <base-card>
      <template v-slot:header>
        <div>
          <h3>{{ fullName }}</h3>
          <base-badge :type="role"></base-badge>
        </div>
        <!-- :caption="role.toUpperCase()" -->
      </template>
      <p>{{ infoText }}</p>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "./BaseCard.vue";
export default {
  components: { BaseCard },
  props: ["fullName", "infoText", "role"],
};
</script>

<style scoped>
section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
