export const GET_USERS_FROM_API = 'GET_USERS_FROM_API'
export const SET_IS_FETCHING = 'SET_IS_FETCHING'
export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_BTN_PREV_DISABLED = 'SET_BTN_PREV_DISABLED'
export const SET_BTN_NEXT_DISABLED = 'SET_BTN_NEXT_DISABLED'
export const SET_SORT_DATA = 'SET_SORT_DATA'
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
export const SET_FILTERED_DATA = 'SET_FILTERED_DATA'
export const SET_UNFILTERED_DATA = 'SET_UNFILTERED_DATA'
export const SET_FORM_VISIBLE = 'SET_FORM_VISIBLE'
export const SET_NEW_USER = 'SET_NEW_USER'

export const getUsersFromApi = (payload) => ({
	type: GET_USERS_FROM_API,
	payload,
})

export const setIsFetching = () => ({
	type: SET_IS_FETCHING,
})

export const setUserInfo = (payload) => ({
	type: SET_USER_INFO,
	payload,
})

export const setCurrentPage = (payload) => ({
	type: SET_CURRENT_PAGE,
	payload,
})

export const setBtnNextDisabled = (payload) => ({
	type: SET_BTN_NEXT_DISABLED,
	payload,
})

export const setBtnPrevDisabled = (payload) => ({
	type: SET_BTN_PREV_DISABLED,
	payload,
})

export const setSortData = (payload) => ({
	type: SET_SORT_DATA,
	payload,
})

export const setSearchValue = (payload) => ({
	type: SET_SEARCH_VALUE,
	payload,
})

export const setFilteredData = (payload) => ({
	type: SET_FILTERED_DATA,
	payload,
})

export const setUnfilteredData = () => ({
	type: SET_UNFILTERED_DATA,
})

export const setFormVisible = (payload) => ({
	type: SET_FORM_VISIBLE,
	payload,
})

export const setNewUser = (payload) => ({
	type: SET_NEW_USER,
	payload,
})
