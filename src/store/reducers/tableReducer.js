import { SET_DATA } from '../actions/selectActions'
import {
	GET_USERS_FROM_API,
	SET_BTN_NEXT_DISABLED,
	SET_BTN_PREV_DISABLED,
	SET_CURRENT_PAGE,
	SET_IS_FETCHING,
	SET_USER_INFO,
	SET_SORT_DATA,
	SET_SEARCH_VALUE,
	SET_FILTERED_DATA,
	SET_UNFILTERED_DATA,
	SET_FORM_VISIBLE,
	SET_NEW_USER,
} from '../actions/tableActions'

const initialState = {
	data: [],
	isFetching: false,
	userInfo: null,
	maxPages: null,
	currentPage: 1,
	currentPageActive: 'active',
	btnNextDisabled: '',
	btnPrevDisabled: '',
	filteredData: [],
	searchValue: '',
	formVisible: false,
}

const tableReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DATA:
			return {
				...state,
				data: [],
				userInfo: null,
				filteredData: [],
				searchValue: '',
				formVisible: false,
			}
		case GET_USERS_FROM_API:
			return {
				...state,
				data: action.payload,
				isFetching: false,
				maxPages: action.payload?.length / 50,
				filteredData: action.payload,
			}
		case SET_IS_FETCHING:
			return {
				...state,
				isFetching: true,
			}
		case SET_USER_INFO:
			return {
				...state,
				userInfo: action.payload,
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload,
				currentPageActive: 'active',
			}
		case SET_BTN_NEXT_DISABLED:
			return {
				...state,
				btnNextDisabled: action.payload,
			}
		case SET_BTN_PREV_DISABLED:
			return {
				...state,
				btnPrevDisabled: action.payload,
			}
		case SET_SORT_DATA:
			return {
				...state,
				filteredData: action.payload,
			}
		case SET_SEARCH_VALUE:
			return {
				...state,
				searchValue: action.payload,
			}
		case SET_FILTERED_DATA:
			return {
				...state,
				maxPages: Math.ceil(action.payload.length / 50),
				filteredData: action.payload,
				currentPage: 1,
			}
		case SET_UNFILTERED_DATA:
			return {
				...state,
				filteredData: state.data,
				maxPages: Math.ceil(state.data.length / 50),
				currentPage: 1,
			}
		case SET_FORM_VISIBLE:
			return {
				...state,
				formVisible: action.payload,
			}
		case SET_NEW_USER:
			return {
				...state,
				data: [action.payload, ...state.data],
				filteredData: [action.payload, ...state.filteredData],
			}
		default:
			return state
	}
}

export default tableReducer
