// 公共方法计算攻击值
function commonAttackValue(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      showWhitchTeam: "monterSlayer",
      src: "app.js",
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

      playerHealth: 100,
      monsterHealth: 100,
      attackCount: 0,
      winner: null,
      operationLogs: [],
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
    monsterHealthWidth() {
      return { width: this.monsterHealth + "%" };
    },
    playerHealthWidth() {
      return { width: this.playerHealth + "%" };
    },
  },
  watch: {
    Result() {
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 5000);
    },
    playerHealth(value) {
      // 如果玩家血量和怪兽血量都小于等于0，判定为平局
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      // 如果玩家血量和怪兽血量都小于等于0，判定为平局
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "playser";
      }
    },
  },

  methods: {
    // 重新开始游戏
    reartGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.attackCount = 0;
      this.winner = null;
      this.operationLogs = [];
    },
    surrender() {
      this.winner = "monster";
      this.operationLogsAdd("投降", "player", 0);
    },
    operationLogsAdd(what, who, value) {
      this.operationLogs.unshift({
        who,
        what,
        value,
      });
    },
    attack() {
      this.attackCount++;
      const attackValue = commonAttackValue(12, 5);
      if (this.monsterHealth - attackValue < 0) {
        this.monsterHealth = 0;
        return;
      }
      this.monsterHealth -= attackValue;
      this.operationLogsAdd("攻击", "player", attackValue);
      this.playerHealthAttack();
    },
    playerHealthAttack() {
      this.attackCount++;
      const attackValue = commonAttackValue(18, 10);
      if (this.playerHealth - attackValue < 0) {
        this.playerHealth = 0;
        return;
      }
      this.operationLogsAdd("攻击", "monster", attackValue);
      this.playerHealth -= attackValue;
    },
    specileAttack() {
      this.attackCount++;
      const attackValue = commonAttackValue(20, 15);
      if (this.monsterHealth - attackValue < 0) {
        this.monsterHealth = 0;
        return;
      }
      if (this.playerHealth - attackValue < 0) {
        this.playerHealth = 0;
        return;
      }
      this.operationLogsAdd("魔法攻击", "player", attackValue);
      this.monsterHealth -= attackValue;
      this.playerHealth -= attackValue;
    },
    healClick() {
      this.attackCount--;
      const healValue = commonAttackValue(20, 10);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.operationLogsAdd("回血", "player", healValue);
    },

    showProject(type, url) {
      this.showWhitchTeam = type;
      this.src = url;
    },
    addTask() {
      this.taskList.push({
        value: this.taskValue,
        id: Math.random().toString() + 1,
      });
    },
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
});
app.mount("#myApp");
