import {GET_DASHBOARD_START} from '../consts/consts';
import {GET_DASHBOARD_SUCCESS} from '../consts/consts';
import {GET_DASHBOARD_ERROR} from '../consts/consts';

export default function (state = {}, action) {
    switch (action.type){
        case GET_DASHBOARD_START :
            return {
                ...state,
                ...action.payload,
            };
        case GET_DASHBOARD_SUCCESS :
            console.log("GET_DASHBOARD_SUCCESS: ", action.payload);
            return {
                ...state,
                ...action.payload,
            };
        case GET_DASHBOARD_ERROR :
            return {
                ...state,
                ...action.payload,
            };
        default :
            return state;
    }
}