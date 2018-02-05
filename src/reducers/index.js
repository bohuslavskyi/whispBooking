import { combineReducers } from 'redux';
import ReducerHotelEvents from './reduceHotelEvents'
import ReducerArrivedThisWeek from './reduceArrivedThisWeek'
import ReducerDashboard from './reduceDashboard'

const rootReducer = combineReducers({
    ReducerHotelEvents,
    ReducerArrivedThisWeek,
    ReducerDashboard,
});

export default rootReducer;