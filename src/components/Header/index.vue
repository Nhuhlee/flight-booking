<template>
  <header class="myContainer myHeader">
    <nav class="navbar navbar-expand-lg bg-light">
      <router-link class="navbar-brand" to="/">
        <img
          src="./../../assets/station-logo.png"
          alt="logo"
          class="img-fluid"
          style="width: 100px"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">
              Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/station">Station</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link" to="/airports">Airports</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/seat">Seat</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/login">Admin</router-link>
          </li>
          <li class="nav-item" style="margin-right: 150px">
            <router-link class="nav-link" to="/ticketinfo"
              >Manage Ticket</router-link
            >
          </li>
          <li class="nav-item">
            <button
              class="btn btn-outline-info my-3 my-sm-0"
              data-toggle="modal"
              data-target="#sign-up"
            >
              Sign up
            </button>
          </li>
          <li class="nav-item" v-if="!token">
            <button
              class="btn btn-outline-success my-3 my-sm-0"
              data-toggle="modal"
              data-target="#loginModal"
            >
              Sign in
            </button>
          </li>
          <li
            class="nav-item pt-2"
            v-else
            style="color: #6c757d; cursor: pointer"
          >
            <div class="dropdown">
              <span
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                ><i class="fa fa-users mr-2"></i>Hello {{ name }}
              </span>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span class="dropdown-item" style="color: #6c757d">Logout</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!-- MODAL -->
    <!-- Modal login -->

    <ModalSignUp ref="modalSignUp" />
    <ModalLogin ref="modalLogin" />

    <!-- Modal signup -->
  </header>
</template>

<script>
import ModalSignUp from "./modal-signup.vue";
import ModalLogin from "./modal-login";

export default {
  components: {
    ModalSignUp,
    ModalLogin,
  },
};
</script>

<style>
</style>

