import {createStore} from 'redux';
import rootReduers from './reducers/index.js';

const store = createStore(rootReduers);

export default store;
