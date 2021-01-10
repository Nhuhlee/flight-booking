<template>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<div class="w3-sidebar w3-bar-block w3-light-grey" style="width:15%">
  <h3 class="w3-bar-item">SKYAIRLINES</h3>
  <a href="#" class="w3-bar-item w3-button">
     <router-link
            exact
            active-class="active"
            class="nav-link"
            to="/admin/dashboard"
            >Dashboard</router-link
          >
  </a>
  <a href="#" class="w3-bar-item w3-button">
    <router-link
            active-class="active"
            class="nav-link"
            to="/admin/flights"
            >Flight</router-link
          >
  </a>
  <a href="#" class="w3-bar-item w3-button">
    <router-link
            active-class="active"
            class="nav-link"
            to="/admin/tickets"
            >Tickket</router-link
          >
  </a>
  <a href="#" class="w3-bar-item w3-button">
    <router-link
            active-class="active"
            class="nav-link"
            to="/admin/airports"
            >Airport</router-link
          >
  </a>
  <a href="#" class="w3-bar-item w3-button">
    <router-link
            active-class="active"
            class="nav-link"
            to="/admin/accounts"
            >Account</router-link
          >
  </a>
  <a href="#" class="w3-bar-item w3-button">
    <router-link
            active-class="active"
            class="nav-link"
            to="/admin/about"
            >About</router-link
          >
  </a>
  
</div>

</template>

<script lang="ts">
export default {

}
</script>
