import Vue from 'vue'
import Vuex from 'vuex'

import session from "./session"
import drawer from "./drawer"
import customer from "./customer"
import employee from "./employee"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    session,
    drawer,
    customer,
    employee,
  }
})
