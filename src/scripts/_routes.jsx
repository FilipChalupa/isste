import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Container from './pages/Container'
import HomePage from './pages/HomePage'
import CameraPage from './pages/CameraPage'

export default (
  <Route path="/" component={Container}>
    <IndexRoute component={HomePage} />
    <Route path="/camera/:id/" component={CameraPage} />
  </Route>
)
