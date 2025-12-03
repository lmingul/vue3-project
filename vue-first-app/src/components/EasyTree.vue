<template>
  <!-- 树形组件 -->
  <div class="tree-box">
    <ul>
      <li
        v-for="(item, index) in treeData"
        :key="`${item.id}-${index}`"
        @click.stop="clickNode(item, '1')"
        class="tree-node"
      >
        <span :class="{ expanded: isExpanded1 && nodeId1 === item.id }">
          ▶
        </span>
        <span>{{ item.label }}</span>
        <div
          v-if="
            item.childrens &&
            item.childrens.length &&
            isExpanded1 &&
            nodeId1 === item.id
          "
        >
          <ul>
            <li
              v-for="(item1, index1) in item.childrens"
              :key="`${item1.id}-${index1}`"
              @click.stop="clickNode(item1, '2')"
              class="tree-node"
            >
              <span :class="{ expanded: isExpanded2 && nodeId2 === item1.id }">
                ▶
              </span>
              <span>{{ item1.label }}</span>
              <div
                v-if="
                  item1.childrens &&
                  item1.childrens.length &&
                  isExpanded2 &&
                  nodeId2 === item1.id
                "
              >
                <ul>
                  <li
                    v-for="(item2, index2) in item1.childrens"
                    :key="`${item2.id}-${index2}`"
                    @click.stop="clickNode(item2, '3')"
                    class="tree-node"
                  >
                    <span
                      :class="{
                        expanded: isExpanded3 && nodeId3 === item2.id,
                      }"
                    >
                      ▶
                    </span>
                    <span>{{ item2.label }}</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup="">
import { ref, defineProps } from "vue";

const props = defineProps({
  treeData: {
    type: Array,
    default: () => [],
    required: true,
  },
});

const isExpanded1 = ref(false);
const isExpanded2 = ref(false);
const isExpanded3 = ref(false);
let nodeId1 = ref("");
let nodeId2 = ref("");
let nodeId3 = ref("");

const clickNode = (item, type) => {
  if (props.treeData && item.childrens && item.childrens.length) {
    // let isCommonNode = item.id.substring(1);
    if (type === "1") {
      isExpanded1.value = !isExpanded1.value;
      nodeId1.value = item.id;
    }
    if (type === "2") {
      isExpanded2.value = !isExpanded2.value;
      nodeId2.value = item.id;
    }
    if (type === "3") {
      isExpanded3.value = !isExpanded3.value;
      nodeId3.value = item.id;
    }
  }
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
  transform: rotate(90deg);
  color: aqua;
}
.tree-node {
  cursor: pointer;
}
</style>
