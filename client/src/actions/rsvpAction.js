import { GET_RSVPS, ADD_RSVP, RESET_STORE } from './rsvpTypes';
import axios from 'axios';

export const addRsvp = (rsvp) => dispatch => {
    axios
        .post('/api/rsvps', rsvp)
        .then(res => 
            dispatch({
                type: ADD_RSVP,
                payload: res.data
            })
        )
}

export const resetStore = () => dispatch => {
    dispatch({
        type: RESET_STORE,
    })
}