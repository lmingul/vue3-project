const app = Vue.createApp({
  data() {
    return {};
  },
});

app.component("components-test", {
  template: `
   <li>
          <p>姓名：{{obj.name}}</p>
          <p>电话：{{obj.phone}}</p>
          <p>邮箱：{{obj.email}}</p>
        </li>`,
  data() {
    return {
      obj: {
        name: "liumingli",
        phone: "1786986899",
        email: "842384234@163.com",
      },
    };
  },
  methods: {},
});

app.mount("#componentsTestApp");
