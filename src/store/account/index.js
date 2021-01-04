import * as types from "./constant";
import { api } from "./../../api";
import router from "../../router";

const state = {
  loading: false,
  data: null,
  err: null,
};

const mutations = {
  [types.M_USER_REQUEST](state) {
    state.loading = true;
    state.data = null;
    state.err = null;
  },
  [types.M_USER_SUCCESS](state, payload) {
    state.loading = false;
    state.data = payload;
    state.err = null;
  },
  [types.M_USER_FAILED](state, payload) {
    state.loading = false;
    state.data = null;
    state.err = payload;
  },
};

const actions = {
  [types.A_FETCH_LIST_USER]({ commit }) {
    commit(types.M_USER_REQUEST);
    api
      .get("/users")
      .then((result) => {
        commit(types.M_USER_SUCCESS, result.data);
      })
      .catch((err) => {
        commit(types.M_USER_FAILED, err);
      });
  },
  fetchDetailUser({ commit }, id) {
    commit(types.M_USER_REQUEST);
    api
      .get(`/users/${id}`)
      .then((result) => {
        commit(types.M_USER_SUCCESS, result.data);
      })
      .catch((err) => {
        commit(types.M_USER_FAILED, err);
      });
  },
  fetchDeleteUser({ commit, dispatch }, id) {
    api
      .delete(`/users/${id}`)
      .then(() => {
        dispatch(types.A_FETCH_LIST_USER);
      })
      .catch((err) => {
        commit(types.M_USER_FAILED, err);
      });
  },
  fetchUpdateUser({ commit }, formUser) {
    api
      .put(`/users/${formUser.id}`, formUser)
      .then(() => {
        router.push("/admin/accounts");
      })
      .catch((err) => {
        commit(types.M_USER_FAILED, err);
      });
  },
  fetchAddUser({ commit }, formUser) {
    api
      .post(`/users/`, formUser)
      .then(() => {
        router.push("/admin/accounts");
      })
      .catch((err) => {
        commit(types.M_USER_FAILED, err);
      });
  },
};

export default { state, mutations, actions };
