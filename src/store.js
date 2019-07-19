import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux_thunk';
import rootReducer from './reducers'

const initialState={};

const middleware =[thunk];
const store =createStore(rootReducer, initialState, applyMiddleware(...middleare))

export default store;
