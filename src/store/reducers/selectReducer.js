import { SET_DATA } from '../actions/selectActions'

const initialState = {
	dataSize: null,
}

const selectReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DATA:
			return {
				...state,
				dataSize: action.payload,
			}
		default:
			return state
	}
}

export default selectReducer
