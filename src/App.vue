<template>
  <div id="app">
    <div class="header">
      <div class="header-item" @click="topClick">
        <router-link to="/">
          top
        </router-link>
      </div>
      <div class="header-item" @click="aboutClick">
        <router-link to="/about">
          about
        </router-link>
      </div>
      <div class="header-item" @click="contactClick">
        <router-link to="/contact">
          contact
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    topClick()  {
      console.log("top");
      this.$analytics.logEvent("click_top_button");
    },
    aboutClick()  {
      console.log("about");
      this.$analytics.logEvent("click_about_button");
    },
    contactClick()  {
      console.log("contact");
      this.$analytics.logEvent("click_contact_button");
    }
  },
  mounted() {
    this.$analytics.setUserId("100"); //自サービスのuidを入力
  }
}
</script>

<style>
a {
  text-decoration: none;
}
.header {
  justify-content: center;
  display: flex;
}
.header-item {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
