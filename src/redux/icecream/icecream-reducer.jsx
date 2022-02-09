// import { BUY_CAKE } from "../cake/cake-type"
import { BUY_ICECREAM } from "./icecream-type"

const initialState = {
    numOfIcecream: 20
}
const icecreamReducer = (state = initialState, action) => {
    switch (action.type){
        case BUY_ICECREAM:
            return {
                ...state, 
                numOfIcecream: state.numOfIcecream - 1
            }
        default: return state
    }
}
export default icecreamReducer