import {createStore} from 'redux';
import reducer from './reducer.js';

//creamos el store que recibe el reducer
const store = createStore(reducer);

export default store;