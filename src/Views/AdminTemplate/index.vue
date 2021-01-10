<template>
  <Sidebar />
  <div style="margin-left:15%">
    
    <NavbarAdmin />
    <div class="w3-container">
    <router-view />
    </div>
  </div>

</template>

<script>
import NavbarAdmin from "./../../components/NavbarAdmin";
import Sidebar from "./../../components/Sidebar";
export default {
  components: {
    NavbarAdmin,
    Sidebar
  },
};
</script>

<style>
</style>