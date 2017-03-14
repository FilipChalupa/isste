import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './_routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from './_store'

//const store = configureStore() // Test
import { createStore} from 'redux'
import reducer from './reducers'

const store = createStore(reducer)
const history = syncHistoryWithStore(hashHistory, store)

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const App = () => (
	<Provider store={store}>
		<MuiThemeProvider>
			<Router history={history} routes={routes} />
		</MuiThemeProvider>
	</Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

export default App
