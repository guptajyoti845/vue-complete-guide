import { createStore } from 'vuex';
import coachesmodules from './modules/coaches/index.js';
const store = createStore({
  modules: {
    coaches: coachesmodules,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
