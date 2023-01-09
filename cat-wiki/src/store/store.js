import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { breedReducer } from "./reducers/breedReducer";

import { searchReducer } from "./reducers/searchReducer";


const initialState={
    breeds:{
        currentBreed:null,
    },
    search:{
        breeds:null,
        breed:null
    }
    
};


const reducer= combineReducers({
    breeds:breedReducer,
    search:searchReducer
});

const composeEnchancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,initialState, composeEnchancer(applyMiddleware(thunk)));

export default store;