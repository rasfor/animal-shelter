import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import animalReducer from './features/MainPage/animals-reducer';

const reducers = combineReducers({
  allAnimals: animalReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;