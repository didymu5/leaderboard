import Vue from 'vue';
import Vuex from 'vuex';
// import athletes from './modules/athletes';
import users from './modules/users';
import createLogger from './../../node_modules/vuex/dist/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    users
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
