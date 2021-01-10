<template>
<div class="w3-container w3-teal">
  <nav class="navbar navbar-expand-md  navbar-dark">
    <!-- Brand -->
    <a class="navbar-brand" href="#">Welcome you to visit Admin Web...</a>
    
    
    <!-- Navbar links -->
    <div class="collapse navbar-collapse relative" id="collapsibleNavbar" >
      <ul class="navbar-nav">
        <li class="nav-item" align="right">
          <button class="nav-link logout" @click="$store.dispatch('actLogout')">
            Log out
          </button>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.active {
  background-color: white;
  color: red !important;
}
.logout {
  color: black !important;
}
</style>
