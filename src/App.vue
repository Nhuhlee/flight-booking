<template>
  <router-view />
</template>

<script>
import * as types from "./store/auth/constant";
export default {
  name: "App",
  components: {},
  created() {
    console.log("autologin");
    this.$store.dispatch(types.A_AUTH_TRY_AUTO_LOGIN);
  },
};
</script>

<style>
</style>
