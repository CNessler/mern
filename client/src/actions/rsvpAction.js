import { GET_RSVPS, ADD_RSVP } from './rsvpTypes';
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