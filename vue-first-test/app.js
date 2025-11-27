const app = Vue.createApp({
  data() {
    return {
      taskValue: "",
      taskList: [],
      isShow: true,
      courGoalA: "Learn Vue 3 fundamentals",
      courGoalB: "Learn Vue 3 fundamentals",
      vuelonk: "https://vuejs.org/",
      htmlContent: "<strong>来自 v-html 的内容</strong>",

      // 任务一
      name: "liumingli",
      age: 26,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHk4of2CV8vDDENxC28Ruda4bF4zIxnDlLw&s",
      src2: "https://img0.baidu.com/it/u=4289736593,4274866781&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889",
      mynumber: Math.random(),
      node: [
        {
          label: "节点1",
          value: 1,
          children: [
            {
              label: "子节点1-1",
              value: 11,
              children: [{ label: "子节点1-1-1", value: 111 }],
            },
            {
              label: "子节点1-2",
              value: 12,
              children: [
                { label: "子节点1-2-1", value: 121 },
                { label: "子节点1-2-2", value: 122 },
              ],
            },
          ],
        },
        {
          label: "节点2",
          value: 2,
          children: [{ label: "子节点2-1", value: 21 }],
        },
        { label: "节点3", value: 3 },
      ],
      isShowTree: false,
      isShowTree2: false,
      clickNode1: "",
      clickNode2: "",
      lastname: "",
      inputValue: "",
      enterValue: "",
      number: "",
      boxA: false,
      boxB: false,
      boxC: false,
    };
  },

  // methods 事件绑定
  // computed 数据绑定
  // watch 非数据更新
  computed: {
    dynamicStyle() {
      return { active: this.boxA };
    },
    Result() {
      if (this.number < 37) {
        return "太小了！";
      } else if (this.number === 37) {
        return 37;
      } else {
        return "太大了！";
      }
    },
    buttonShowText() {
      return this.isShow ? "显示列表" : "隐藏列表";
    },
  },
  watch: {
    Result() {
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 5000);
    },
  },

  methods: {
    isShowUl() {
      this.isShow = !this.isShow;
    },
    clickBox(type) {
      if (type === "A") {
        this.boxA = !this.boxA;
      } else if (type === "B") {
        this.boxB = !this.boxB;
      } else if (type === "C") {
        this.boxC = !this.boxC;
      }
    },
    outputGloal() {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        return this.courGoalA; //
      } else {
        return this.courGoalB;
      }
    },
    mynumberFun() {
      const number = Math.random() + 2;
      return number;
    },
    showTree(item, type) {
      if (item.children && item.children.length) {
        if (type === "01") {
          this.isShowTree = !this.isShowTree;
          this.clickNode1 = item.value;
        } else if (type === "02") {
          this.isShowTree2 = !this.isShowTree2;
          this.clickNode2 = item.value;
        }
      }
    },
    setName(event, name) {
      this.lastname = event.target.value + "" + name;
    },
    buttonClick() {
      alert("按钮被点击了！");
    },
    changeValue(event) {
      this.inputValue = event.target.value;
    },
    enterchangeValue($event) {
      this.enterValue = $event.target.value + "hello";
    },
    buttonClick(data) {
      this.number = data === 5 ? this.number + data : this.number - 1;
    },
  },

  // 生命周期的运用
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
});
app.mount("#myApp");

// setTimeout(() => {
//   app.unmount("#myApp");
// }, 5000);
