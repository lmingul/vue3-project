// 公共方法计算攻击值
function commonAttackValue(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      showWhitchTeam: "monterSlayer",
      playerHealth: 100,
      monsterHealth: 100,
      attackCount: 0,
      winner: null,
      operationLogs: [],
    };
  },

  computed: {
    monsterHealthWidth() {
      return { width: this.monsterHealth + "%" };
    },
    playerHealthWidth() {
      return { width: this.playerHealth + "%" };
    },
  },

  watch: {
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
    addTask() {
      this.taskList.push({
        value: this.taskValue,
        id: Math.random().toString() + 1,
      });
    },
  },
});

app.mount("#myApp");
