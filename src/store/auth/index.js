import { api } from "./../../api";
import router from "../../router";
import jwtDecode from "jwt-decode";
import setHeader from "./../../utils/setHeader";


const state = {
  token: null,
  err: null,
  loading: false,
};

const mutations = {
  loginRequest(state) {
    state.token = null;
    state.err = null;
    state.loading = true;
  },
  loginSuccess(state, payload) {
    state.token = payload;
    state.err = null;
    state.loading = false;
  },
  loginFailed(state, payload) {
    state.token = null;
    state.err = payload;
    state.loading = false;
  },
  clearAuth(state) {
    state.token = null;
    state.err = null;
    state.loading = false;
  },
};

const actions = {
  actLogin({ commit, dispatch }, authData) {
    commit("loginRequest");
    api
      .post("/login", {
        email: authData.email,
        password: authData.password,
      })
      .then((result) => {
        commit("loginSuccess", result.data.token);

        const user = jwtDecode(result.data.token);
        if (user.userType === "Client") {
          return Promise.reject({
            response: { data: { message: "Ban khong co quyen truy cap..." } },
          });
        }
        const exp = (user.exp - user.iat) * 1000;

        //lưu token xuống localStorage
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("exp", user.exp);
        dispatch("setTimeoutLogout", exp);
        setHeader(result.data.token);
        //chuyển hướng vào dashboard
        router.replace("/admin/dashboard");
      })
      .catch((err) => {
        commit("loginFailed", err);
      });
  },

  actLogout({ commit }) {
    commit("clearAuth");
    localStorage.removeItem("token");
    localStorage.removeItem("exp");
    router.replace("/admin/login");
  },

  setTimeoutLogout({ dispatch }, exp) {
    setTimeout(() => {
      dispatch("actLogout");
    }, exp);
  },

  actTryLogin({ commit, dispatch }) {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const exp = localStorage.getItem("exp");
    const date = new Date();
    if (date.getTime() > exp * 1000) {
      dispatch("actLogout");
      return;
    }
    setHeader(token);
    commit("loginSuccess", token);
  },
};

export default { state, mutations, actions };
