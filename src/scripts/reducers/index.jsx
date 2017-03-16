import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import cameras from './cameras'
import menu from './menu'

const rootReducer = combineReducers({
	cameras,
	menu,
  routing,
})

export default rootReducer
