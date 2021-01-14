import * as types from "./constant";
import { api } from "./../../api";
import router from "../../router";

const state = {
  loading: false,
  data: null,
  err: null,
};

const mutations = {
  [types.M_STATION_REQUEST](state) {
    state.loading = true;
    state.data = null;
    state.err = null;
  },
  [types.M_STATION_SUCCESS](state, payload) {
    state.loading = false;
    state.data = payload;
    state.err = null;
  },
  [types.M_STATION_FAILED](state, payload) {
    state.loading = false;
    state.data = null;
    state.err = payload;
  },
};

const actions = {
  [types.A_FETCH_LIST_STATION]({ commit }) {
    commit(types.M_STATION_REQUEST);
    api
      .get("/stations")
      .then((result) => {
        commit(types.M_STATION_SUCCESS, result.data);
      })
      .catch((err) => {
        commit(types.M_STATION_FAILED, err);
      });
  },
  fetchDetailStation({ commit }, id) {
    commit(types.M_STATION_REQUEST);
    api
      .get(`/stations/${id}`)
      .then((result) => {
        commit(types.M_STATION_SUCCESS, result.data);
      })
      .catch((err) => {
        commit(types.M_STATION_FAILED, err);
      });
  },
  fetchDeleteStation({ commit, dispatch }, id) {
    api
      .delete(`/stations/${id}`)
      .then(() => {
        dispatch(types.A_FETCH_LIST_STATION);
      })
      .catch((err) => {
        commit(types.M_STATION_FAILED, err);
      });
  },
  fetchUpdateStation({ commit }, formStation) {
    api
      .put(`/stations/${formStation.id}`, formStation)
      .then(() => {
        router.push("/admin/stations");
      })
      .catch((err) => {
        commit(types.M_STATION_FAILED, err);
      });
  },
};

export default { state, mutations, actions };
