import { API_FAIL, API_REQUEST, API_SUCCESS } from "../constant/firstconstant";

export const ImageReducer = (state= {products: []},action) =>{
    switch(action.type){
        case API_REQUEST:
            return {loading: true}
        case API_SUCCESS:
            return{
                loading: false,
                products: action.payload
            }
        case API_FAIL:
            return{
                loading: false,
                error: action.payload
            }        
        default:
            return state;    
    }
}