import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import {List, ListItem} from 'material-ui/List'
import CameraIcon from 'material-ui/svg-icons/av/videocam'
import InfoIcon from 'material-ui/svg-icons/action/info'
import HomeIcon from 'material-ui/svg-icons/action/home'
import BuildIcon from 'material-ui/svg-icons/action/build'

import * as MenuActions from '../actions/menu'

class MenuDrawer extends React.Component {

	handleChange = (open) => this.props.setOpenMenuDrawer(open)

	handleClose = () => this.props.setOpenMenuDrawer(false)

	cameras = () => {
		return Object.keys(this.props.cameras).map((id, i) => {
			const camera = this.props.cameras[id]
			return <ListItem
				key={i}
				primaryText={camera.name}
				containerElement={<Link to={`/camera/${id}/`} />}
				onTouchTap={this.handleClose}
			/>
		})
	}

	render() {
		return (
			<div>
				<Drawer
					open={this.props.open}
					docked={false}
					onRequestChange={this.handleChange}
				>
					<AppBar
						title={<span style={{cursor: 'pointer'}}>Menu</span>}
						iconElementLeft={<IconButton onTouchTap={this.handleClose}><NavigationClose /></IconButton>}
						onTitleTouchTap={this.handleClose}
					/>

					<MenuItem
						containerElement={<Link to={'/'} />}
						onTouchTap={this.handleClose}
						leftIcon={<HomeIcon />}
						primaryText='Úvod'
					/>

					<MenuItem
						containerElement={<Link to={'/conditions/'} />}
						onTouchTap={this.handleClose}
						leftIcon={<InfoIcon />}
						primaryText='Podmínky'
					/>

					{/*<List>
						<ListItem
							primaryText='Kamery'
							leftIcon={<CameraIcon />}
							initiallyOpen={false}
							primaryTogglesNestedList={true}
							nestedItems={this.cameras()}
						/>
					</List>*/}

					<MenuItem
						containerElement={<Link to={'/how-to/'} />}
						onTouchTap={this.handleClose}
						leftIcon={<BuildIcon />}
						primaryText='Postupy'
					/>
				</Drawer>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		cameras: state.cameras,
		menu: state.menu,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(MenuActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuDrawer)
