import {GET_ARRIVED_THIS_WEEK_START} from '../consts/consts';
import {GET_ARRIVED_THIS_WEEK_SUCCESS} from '../consts/consts';
import {GET_ARRIVED_THIS_WEEK_ERROR} from '../consts/consts';


export default function (state = {}, action) {
    switch (action.type){
        case GET_ARRIVED_THIS_WEEK_START :
            return {
                ...state,
                ...action.payload
            };
        case GET_ARRIVED_THIS_WEEK_SUCCESS :
            return {
                ...state,
                ...action.payload
            };
        case GET_ARRIVED_THIS_WEEK_ERROR :
            return {
                ...state,
                ...action.payload
            };
        default :
            return state;
    }
}