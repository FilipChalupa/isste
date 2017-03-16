import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './_routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { red600, red800 } from 'material-ui/styles/colors'
import configureStore from './_store'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const muiTheme = getMuiTheme({
	palette: {
    primary1Color: red600,
    primary2Color: red800,
    pickerHeaderColor: red600,
	}
})

const App = () => (
	<Provider store={store}>
		<MuiThemeProvider muiTheme={muiTheme}>
			<Router history={history} routes={routes} />
		</MuiThemeProvider>
	</Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

export default App
