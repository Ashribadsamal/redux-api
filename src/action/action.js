import { API_FAIL, API_REQUEST, API_SUCCESS } from "../constant/firstconstant"
import Axios from 'axios';

// const APP_ID = "6ddcd0ad";
// const APP_KEY = "4ba29c81911d001d966a94956dc5e28b"

//const exReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
export const listGallery =()=>async (dispatch)=>{
    dispatch({
        type: API_REQUEST
    });
    try{
        const {data} = await Axios.get("https://jsonplaceholder.typicode.com/albums")
        dispatch({
            type: API_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: API_FAIL,
            payload: error.message
        })
    }
}