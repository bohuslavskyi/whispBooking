import {GET_HOTEL_EVENTS_START} from '../consts/consts';
import {GET_HOTEL_EVENTS_SUCCESS} from '../consts/consts';
import {GET_HOTEL_EVENTS_ERROR} from '../consts/consts';

export default function (state = {}, action) {

    switch (action.type) {
        case GET_HOTEL_EVENTS_START:
            console.log("GET_HOTEL_EVENTS_START: ", action.payload);
            return {
                ...state,
                ...action.payload
            };

        case GET_HOTEL_EVENTS_SUCCESS:
            console.log("GET_HOTEL_EVENTS_SUCCESS: ", action.payload);
            return {
                ...state,
                ...action.payload,
            };

        case GET_HOTEL_EVENTS_ERROR:
            console.log("GET_HOTEL_EVENTS_ERROR: ", action.payload);
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
}
