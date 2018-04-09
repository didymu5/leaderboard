import Seed from './../seed';

const Athletes = Seed; // remote this
console.log(process.env.NODE_ENV);
const state = {
  all: Athletes()
};

const getters = {
  allAthletes: st => st.all,
  allWorkouts: st => st.all[0].workouts
};

const actions = {
  getAllAthletes({ commit }) {
    commit('setAthletes', Athletes());
  }
};

const mutations = {
  setAthletes(st, athletes) {
    const mutationState = st;
    mutationState.all = athletes;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
