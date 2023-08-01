import { INCREASE,DECREASE,RESET } from "../actions/actionTypes";


let initialState=0;

function counterReducer(state=initialState,action){
     switch(action.type){
        case INCREASE:
            return state+action.value


        case DECREASE:
                return state-1
         
        case RESET:
            return initialState   
            
        default:
            return state    

     }

}
export default counterReducer;