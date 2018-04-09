import db from './../../db';

const usersRef = db.collection('users');

const state = {
  all: []
};

// usersRef.get().then((querySnapshot) => {
//   console.log(querySnapshot.docs);
// });
const getters = {
  allAthletes: st => st.all
};

const actions = {
  getAllAthletes({ commit }) {
    usersRef.get().then((querySnapshot) => {
      console.log(querySnapshot);
      commit('setAthletes', querySnapshot);
    });
  }
};

const mutations = {
  setAthletes(st, athletes) {
    state.all = athletes;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
