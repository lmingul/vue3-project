<!--
 * @Author: lmingul
 * @Date: 2025-11-25 18:46:45
 * @LastEditors: lmingul
 * @LastEditTime: 2025-11-27 00:24:19
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

条件渲染

v-if v-else v-else-if
v-show
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
