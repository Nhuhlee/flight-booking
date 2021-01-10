<template>
  <template v-if="loading">
    <Loader />
  </template>
  <div class="container" v-else>
    <br>
    <div>
      <router-link
          class="btn btn-success"
          :to="`/admin/accounts/add`"
      >Add new user</router-link>
            &nbsp;&nbsp;
      <router-link
          class="btn btn-info mr-2"
          :to="`/admin/accounts/update`"
      >Reset</router-link>
    </div>
    <br>
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th>Account.No</th>
              <th>User name</th>
              <th>User email </th>
              <th>User type </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in data" :key="user._id">
              <td>{{ index + 1 }}</td>
              <td>{{ user.fullName }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.userType }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./../../../components/Loader";
import * as types from "./../../../store/account/constant";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      id: "",
    };
  },
  created() {
    this.$store.dispatch(types.A_FETCH_LIST_USER);
  },
  computed: {
    loading() {
      return this.$store.state.user.loading;
    },
    data() {
      return this.$store.state.user.data;
    },
  },
};
</script>

<style>
</style>