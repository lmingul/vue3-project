<!--
 * @Author: lmingul
 * @Date: 2025-11-25 18:46:45
 * @LastEditors: lmingul
 * @LastEditTime: 2025-12-08 20:46:34
 * @FilePath: \font-test\vue3-project\README.md
 * @Description:
-->

# Vue 3 学习

老师课程：[https://www.bilibili.com/video/BV1Wr4y1n7rG/?share_source=copy_web&vd_source=9014c62a6d1706f9f0357493616dee4a]

课程的简单记录：

> 课程开始学习日期： 2025-11-23，争取 2025-11-30 学完

## 插值

## 方法

## 动态样式（Dynamic Styling）

- style (一般不建议写内联样式)
- class (可以动态，可以运用 computed)

> 学习日期： 2025-11-26，进度 42

:class="{active: boxB}"

Dom & Templates 视图与模板交互

Data & Event Biindings 数据与事件交互

Reactivity 视图的反应性 computed watch

Styling 样式 动态类和内联样式

## 条件渲染

v-if v-else v-else-if
v-showS
是否占位

v-for
v-for="(item,index) in list" v-for 遍历数组
v-for="(value,key,index) in {name:"Max",age:31}" v-for 遍历对象
v-for="num in 10"
key 属性 列表的唯一项 避免渲染时出现错误 视图重用 dom 元素来优化性能

> 尽量将 JavaScript 代码移出 dom, 用 computed ，watch 方向 使用它

> 实现一个打怪兽的小游戏，游戏内容：分为怪兽和玩家，两方各有生命值，有四个按钮可玩，攻击，魔法攻击
> 回血，投降，以及输出操作日志的功能(2025-11-26 完成)

Vue : 幕后工作原理 vue 是怎么工作的？

> 学习日期： 2025-11-27，进度 69

> 2025-11-27 学习新内容 template

ref

## Virtual Dom

虚拟 dom,vue 是怎么更新 dom 元素的,具有真实 dom 的虚拟副本，完全由 JavaScript 管理
只有两个 dom 之间的区别会被重新渲染到屏幕中

## Vue 生命周期 Lifecycle

- beforeCreate()
- created()
- beforeMount()
- mounted 开始初始化，显现屏幕内容，构建 dom,添加元素
- beforeUpdate()
- updated() 更新
- beforeUnmount()
- unmounted() 卸载程序，删除元素// 生命周期的运用

```
beforeCreate() {
console.log("beforeCreate: 实例被创建，数据观测和事件配置尚未开始");
},
created() {
console.log("created: 实例已经创建，数据观测和事件配置已经完成");
},
beforeMount() {
console.log("beforeMount: el 被新创建的 vm.$el 替换之前调用");
  },
  mounted() {
    console.log("mounted: el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用");
},
beforeUpdate() {
console.log(
"beforeUpdate: 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前"
);
},
updated() {
console.log("update: 由于数据更改，虚拟 DOM 重新渲染和打补丁之后调用");
},
beforeUnmount() {
console.log("beforeUnmount: 实例销毁之前调用");
},
unmounted() {
console.log("unmounted: 实例销毁之后调用");
},
```

## 组件 components

标识符（组件名称，通常是 firends-conteft 的格式） + 配置对象

```
app.component('components-test',{
data(){
return{}
},
methods:{
}
})

```

## Vue cli

访问网站在服务器上运行
网络服务器 development web server http https

cli.vuejs.org

### node.js

### npm 打包管理器 packaged manager

```
<!-- 安装cli -->
npm install -g @vue/cli

<!-- 创建项目 -->
vue create vue-first-app

```

> 学习日期： 2025-11-28，进度 82 ,开始正式的 vue3 项目搭建与学习

## 构建工作流程 Using a Build Workflow

our code -> build step -> development or real server
将我们的代码编译为浏览器能读懂的 JavaScript 代码

> 学习日期： 2025-11-30，进度 86 ,开始正式的 vue3

### components

可复用组件

#### props 核心概念

properties 属性的缩写
亲子交流 父子组件 parent to the child component
通常不应该被改变，单向数据流，如果要改变，可新建一个 data 值，将 prop 中的值赋值给它

```
<!-- 组件用小驼峰命名法 -->
<firends :name="candy" :phone-number="9843349-489-7876" :email-adress="8344833@163.com"><firends/>
<!-- 帕斯卡命名法，无破折号 -->
props:[
name:"",
phoneNumber:"",
emailAdress:"",
]

<!-- 确定值类型,是否必须  string boolean -->
props:{
  name:String,
  data:{
    type:String,
    require:true,// 是否必须

  },
  number:{
    type: String,
    require:false,
    default:'0',
    validator: function(value){
    return  value === 1 || valaue === 2
    }

  }
}
```

自定义组件时，for 循环中 key 是必须的

监听事件 子组件到父组件

```
this.$emit('toggle-click'，this.name)
事件名称，传递参数

<firends  @toggle-click="toggleClick" :name="candy" :phone-number="9843349-489-7876" :email-adress="8344833@163.com"><firends/>


methods:{
  toggleClick(name){

  }
}
```

emits 记录事件，理解组件所作的事

```
<stript>
export default{
  emits:['toggle-click'],
   <!-- emits；{
    'toggle-click':function(id){
    } -->
   }

}

</stript>

```

> 学习日期： 2025-12-3，进度 99 ,编写 tree 树组件，整理模块

## provide he inject

一种可用于在一个地方提供数据的模式，并注入它，并使用它
默认通信机制

```
provide:{
topics:[]
}

<!-- 响应式变化 -->
provide(){
  return {
    topics: this.topics,
  }

},

inject:['topics'],// 提供数组

```

### 方法

```
<template>
<li>
<button></button>
<li>

</template>

<script>

<script>
```

## Diving Deeper into Components

深入了解组件

## Slots && 动态组件

> 学习日期： 2025-12-8，进度 107

### 全局组件

```
app.component("base-badge", BaseBadge);

```

### 局部注册 local Components

保持主 js 文件简洁

```

import TheHeader from "./components/BadgeComponts/TheHeader.vue";

components: { TheHeader },

```

### scope 样式隔离

防止样式污染，作用域

```
<style scoped>
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14005e;
}

header h1 {
  color: white;
  margin: 0;
}
</style>

```

### slot 插槽

允许从组件外部接受有可能使用视图功能的 html 内容，就向 props 一样，但是 props 是用来存储数据的，

```
<template>
   <div>
    <header>
    <!-- 具名插槽 -->
      <slot name="header"></slot>
    </header>
    <slot></slot>
  </div>
</template>

```

**使用**

```
 <base-card>
      <template v-slot:header>
        <h2>Available Badges</h2>
      </template>
     <template v-slot:default>
      <ul>
        <li>
          <base-badge type="admin" caption="ADMIN"></base-badge>
        </li>
        <li>
          <base-badge type="author" caption="AUTHOR"></base-badge>
        </li>
      </ul>
     </template>
</base-card>

```

未命名的插槽成为默认插槽，可以允许有多个插槽，但是默认插槽只能有一个
简写为#

```
 <base-card>
      <template #header>
        <h2>Available Badges</h2>
      </template>
     <template #default>
      <ul>
        <li>
          <base-badge type="admin" caption="ADMIN"></base-badge>
        </li>
        <li>
          <base-badge type="author" caption="AUTHOR"></base-badge>
        </li>
      </ul>
     </template>
</base-card>

```

查看数据

console.log(this.$slots);

### scoped slots 作用域插槽

从定义插槽的组件内部传递数据，

slotProps

```
<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>

    <slot name="nameList" :datas="name" another-prop="..."></slot>
    <slot></slot>
  </div>
</template>

      <template #nameList="slotProps">
        <p>{{ slotProps.datas }} {{ slotProps["another-prop"] }}</p>
        <p>{{ slotProps["another-prop"] }}</p>
      </template>s

```

> 学习日期： 2025-12-8，进度 114 学习结束

## console 的类型

- 快速打印变量：console.log/info
- 警告 / 错误定位：console.warn/error（带调用栈）
- console.debug('调试细节：xxx')
- 数据可视化：console.table（数组 / 对象）
- 调试辅助类型：
  DOM 元素检查 console.dir(document.body)
  元素高亮 console.assert(condition, '消息')
  断点调试 debugger（非 console API，但关联）
  性能分析 console.profile('函数分析'); fn(); console.profileEnd()
  内存快照 console.takeHeapSnapshot('内存快照')
- 特殊用途类型
  清空控制台 console.clear()
  调用栈追踪 console.trace('追踪起点')
- 性能计时：console.time/timeEnd
- 逻辑分组：console.group/groupEnd
- 调用链追踪：console.trace
- 条件验证：console.assert
