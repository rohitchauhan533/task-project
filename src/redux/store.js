import { createStore } from 'redux';
import ListReducer from "../redux/reducers/ListReducer"

const store = createStore(ListReducer);

export default store;
