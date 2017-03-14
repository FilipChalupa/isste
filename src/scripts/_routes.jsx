import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import HomePage from './pages/HomePage'
import CameraPage from './pages/CameraPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    {/*<Route path="/camera" component={CameraPage} />*/}
  </Route>
)
