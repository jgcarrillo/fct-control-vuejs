import { v4 as uuidv4 } from 'uuid';
import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import { getActualDate } from '../helpers/helpers';

const store = createStore({
  state() {
    return {
      tasks: [
        {
          id: uuidv4(),
          title: 'Mi primera tarea',
          description: 'Esta es mi primera tarea',
          startdate: '01/01/2022',
          enddate: '02/02/2022',
          hours: 8,
        },
        {
          id: uuidv4(),
          title: 'Mi segunda tarea',
          description: 'Esta es mi segunda tarea',
          startdate: '03/04/2022',
          enddate: '12/04/2022',
          hours: 7,
        },
      ],
      searchTerm: '',
      userData: {
        name: '',
        nre: '',
        year: '',
        company: '',
        startdate: getActualDate(),
        enddate: getActualDate(),
        hours: 400,
      },
      number: '45587854/878-9-8',
      education: 'Desarrollo de Aplicaciones Web - LOE',
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
