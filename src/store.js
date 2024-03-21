// src/store.js

import { createStore } from 'redux';
import todoApp from './reducers';

// Create Redux store
const store = createStore(todoApp);

export default store;
