import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './'
import { Provider } from 'react-redux'
import { store } from './store/index'
import 'bootstrap/dist/css/bootstrap.css'

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
