import * as types from "./constant";
import { api } from "./../../api";
import router from "../../router";

const state = {
  loading: false,
  data: null,
  err: null,
};

const mutations = {
  [types.M_FLIGHT_REQUEST](state) {
    state.loading = true;
    state.data = null;
    state.err = null;
  },
  [types.M_FLIGHT_SUCCESS](state, payload) {
    state.loading = false;
    state.data = payload;
    state.err = null;
  },
  [types.M_FLIGHT_FAILED](state, payload) {
    state.loading = false;
    state.data = null;
    state.err = payload;
  },
};

const actions = {
  [types.A_FETCH_LIST_FLIGHT]({ commit }) {
    commit(types.M_FLIGHT_REQUEST);
    api
      .get("/flights")
      .then((result) => {
        commit(types.M_FLIGHT_SUCCESS, result.data);
      })
      .catch((err) => {
        commit(types.M_FLIGHT_FAILED, err);
      });
  },
  fetchDetailFlight({ commit }, id) {
    commit(types.M_FLIGHT_REQUEST);
    api
      .get(`/flights/${id}`)
      .then((result) => {
        commit(types.M_FLIGHT_SUCCESS, result.data);
      })
      .catch((err) => {
        commit(types.M_FLIGHT_FAILED, err);
      });
  },
  fetchDeleteFlight({ commit, dispatch }, id) {
    api
      .delete(`/flights/${id}`)
      .then(() => {
        dispatch(types.A_FETCH_LIST_FLIGHT);
      })
      .catch((err) => {
        commit(types.M_FLIGHT_FAILED, err);
      });
  },
  fetchUpdateFlight({ commit }, formFlight) {
    api
      .put(`/flights/${formFlight.id}`, formFlight)
      .then(() => {
        router.push("/admin/flights");
      })
      .catch((err) => {
        commit(types.M_FLIGHT_FAILED, err);
      });
  },
  fetchAddFlight({ commit }, formFlight) {
    api
      .post(`/flights/`, formFlight)
      .then(() => {
        router.push("/admin/flights");
      })
      .catch((err) => {
        commit(types.M_FLIGHT_FAILED, err);
      });
  },
};

export default { state, mutations, actions };
