import {GET_HOTEL_EVENTS_START} from '../consts/consts';
import {GET_HOTEL_EVENTS_SUCCESS} from '../consts/consts';
import {GET_HOTEL_EVENTS_ERROR} from '../consts/consts';

import {GET_ARRIVED_THIS_WEEK_START} from '../consts/consts';
import {GET_ARRIVED_THIS_WEEK_SUCCESS} from '../consts/consts';
import {GET_ARRIVED_THIS_WEEK_ERROR} from '../consts/consts';

import {GET_DASHBOARD_START} from '../consts/consts';
import {GET_DASHBOARD_SUCCESS} from '../consts/consts';
import {GET_DASHBOARD_ERROR} from '../consts/consts';

import axios from 'axios';

// export const Hui = () => {
//     const request = axios.get('https://interview-booking-api.herokuapp.com/api/recent-activity')
//     return {
//         type: SMELLS_LIKE_PUSSY,
//         payload: request
//     }
// }

export const getHotelEvents = () => {
        return function (dispatch) {
            dispatch({
                type: GET_HOTEL_EVENTS_START,
                payload: {isLoading: true}
            })

            axios.get('https://interview-booking-api.herokuapp.com/api/recent-activity')
                .then(function ({data}) {
                    dispatch({
                        type: GET_HOTEL_EVENTS_SUCCESS,
                        payload: {data, isLoading: false}
                    })
                })
                .catch(function (error) {
                    dispatch({
                        type: GET_HOTEL_EVENTS_ERROR,
                        payload: error
                    })
                });
        }
}

export const getErrivedThisWeek = () => {
    return function (dispatch) {
        dispatch({
            type: GET_ARRIVED_THIS_WEEK_START,
            payload: {isLoading: true}
        })

        axios.get('https://interview-booking-api.herokuapp.com/api/bookings')
            .then(function ({data}) {
                    dispatch({
                        type: GET_ARRIVED_THIS_WEEK_SUCCESS,
                        payload: {data, isLoading: false}
                    })
            })
            .catch(function (error) {
                dispatch({
                    type: GET_ARRIVED_THIS_WEEK_ERROR,
                    payload: error
                })
            });
    }
}

export const getDashboardTotals = () => {
    return function (dispatch) {
        dispatch({
            type: GET_DASHBOARD_START,
            payload: {isLoading: true}
        })

        axios.get('https://interview-booking-api.herokuapp.com/api/booking-snapshot')
            .then(function ({data}) {
                    dispatch({
                        type: GET_DASHBOARD_SUCCESS,
                        payload: {data, isLoading: false}
                    })
            })
            .catch(function (error) {
                dispatch({
                    type: GET_DASHBOARD_ERROR,
                    payload: error
                })
            });
    }
}


