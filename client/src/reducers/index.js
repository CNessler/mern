import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import rsvpReducer from './rsvpReducer';

export default combineReducers({
    item: itemReducer,
    rsvp: rsvpReducer
})
