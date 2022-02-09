import { useReducer } from "react";
import { combineReducers } from "redux";
import cakeReducer from "./cake/cake-reducer";
import icecreamReducer from "./icecream/icecream-reducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: useReducer
})

export default rootReducer