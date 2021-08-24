import { createStore } from 'vuex';
import coachesmodules from './modules/coaches/index.js';
const store = createStore({
  modules: {
    coaches: coachesmodules,
  },
});

export default store;
