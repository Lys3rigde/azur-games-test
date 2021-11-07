import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import selectReducer from './reducers/selectReducer'
import tableReducer from './reducers/tableReducer'

const rootReducer = combineReducers({
	select: selectReducer,
	table: tableReducer,
})

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)
