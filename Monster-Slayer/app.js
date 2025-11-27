const app = Vue.createApp({
  data() {
    return {
      showWhitchTeam: "base",
      src: "",
      name: "",
    };
  },
  methods: {
    showProject(type, url) {
      this.showWhitchTeam = type;
      this.src = url;
      this.name = "show 怪兽";
    },
  },
});

app.mount("#app");
