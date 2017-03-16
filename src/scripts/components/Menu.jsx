import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'

import MenuDrawer from './MenuDrawer'
import * as MenuActions from '../actions/menu'

class Menu extends Component {
	render() {
		return (
			<div
				style={{
					position: 'sticky',
					top: 0,
					zIndex: 10,
				}}
			>
				<MenuDrawer
					open={this.props.menu.drawerOpen}
				/>
				<AppBar
					title={this.props.menu.title}
					onLeftIconButtonTouchTap={() => this.props.setOpenMenuDrawer(true)}
				/>
			</div>
		)
	}
}


function mapStateToProps(state) {
  return {
    menu: state.menu,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MenuActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
