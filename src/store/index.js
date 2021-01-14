import { createStore } from "vuex";
import station from "./station";
import auth from "./auth";
import airport from "./airport";
import user from "./account";
import flight from "./flight";

export default createStore({
  modules: { station, auth, airport, user , flight},
});
