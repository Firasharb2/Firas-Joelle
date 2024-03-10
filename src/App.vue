<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/UserSignUp">SignUp</router-link> |
    <router-link to="/Login">Login</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/test">test</router-link>|
    <router-link to="/TheOne">TheOne</router-link>|
  </nav>
  <router-view /> -->

  <div>
    <!-- Conditionally render the navbar -->
    <!-- <nav v-if="!hideNavbar">
      <router-link to="/">Home</router-link> |
      <router-link to="/UserSignUp">SignUp</router-link> |
      <router-link to="/Login">Login</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">test</router-link> |
      <router-link to="/TheOne">TheOne</router-link> |
    </nav> -->
    <!-- <-- Render the router view -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      hideNavbar: false, // Initially, the navbar is visible
    };
  },
  watch: {
    $route() {
      // Check if the current route is 'TheOne'
      if (this.$route.path === "/TheOne") {
        // Hide the navbar if the route is 'TheOne'
        this.hideNavbar = true;
      } else {
        // Show the navbar for other routes
        this.hideNavbar = false;
      }
    },
  },
};
</script>
