import { GET_RSVPS, ADD_RSVP } from '../actions/rsvpTypes';

const initialState = {
    rsvp: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_RSVPS:
            return {
                ...state,
                rsvp: action.payload
            }
        case ADD_RSVP:
            return {
                ...state,
                rsvp: [action.payload, ...state.rsvp]
            }
        default:
            return state;
    }
}