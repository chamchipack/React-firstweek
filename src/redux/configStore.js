import {createStore, combineReducers} from 'redux';
import widget from './modules/widget'
// 여러개의 리듀서를 가져올 수 있다.
const rootReducer = combineReducers({widget});
const store = createStore(rootReducer);

export default store;