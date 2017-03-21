import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Container from './pages/Container'
import HomePage from './pages/HomePage'
import CameraPage from './pages/CameraPage'
import HowToPage from './pages/HowToPage'
import ConditionsPage from './pages/ConditionsPage'

export default (
	<Route path="/" component={Container}>
		<IndexRoute component={HomePage} />
		<Route path="/camera/:id/" component={CameraPage} />
		<Route path="/how-to/" component={HowToPage} />
		<Route path="/conditions/" component={ConditionsPage} />
	</Route>
)
