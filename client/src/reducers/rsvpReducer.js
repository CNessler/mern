import { GET_RSVPS, ADD_RSVP } from '../actions/rsvpTypes';

const initialState = {
    rsvps: [],
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_RSVPS:
            return {
                ...state,
                rsvp: action.payload,
                loading: false
            }
        case ADD_RSVP:
            return {
                ...state,
                rsvp: [action.payload, ...state.rsvps]
            }
        default:
            return state;
    }
}