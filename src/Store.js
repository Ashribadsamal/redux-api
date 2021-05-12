import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { ImageReducer } from './reducer/firstreducer';
import thunk from 'redux-thunk'

const initialState = {};
const reducer = combineReducers({
    
        Image: ImageReducer, 
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;