import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

const store = createStore({
  state() {
    return {
      tasks: [
        {
          id: 't1',
          title: 'Mi primera tarea',
          description: 'Esta es mi primera tarea',
          startdate: '01/01/2022',
          enddate: '02/02/2022',
          hours: 8,
        },
        {
          id: 't2',
          title: 'Mi segunda tarea',
          description: 'Esta es mi segunda tarea',
          startdate: '03/04/2022',
          enddate: '12/02/2022',
          hours: 7,
        },
      ],
      userData: {
        name: 'Jorge Gómez Carrillo',
        nre: '5452145',
        year: '2023/2024',
        company: 'Mi empresa',
        startdate: '01/01/2022',
        enddate: '02/02/2022',
        hours: 400,
      },
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
