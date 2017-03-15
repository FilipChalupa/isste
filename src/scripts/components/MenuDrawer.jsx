import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

import * as MenuActions from '../actions/menu'

class MenuDrawer extends React.Component {

	handleChange = (open) => this.props.setOpenMenuDrawer(open)

	handleClose = () => this.props.setOpenMenuDrawer(false)

  render() {
    return (
      <div>
        <Drawer
					open={this.props.open}
					docked={false}
					onRequestChange={this.handleChange}
				>
					<AppBar
            title='Menu'
            iconElementLeft={<IconButton onTouchTap={this.handleClose}><NavigationClose /></IconButton>}
          />

          <MenuItem
						onTouchTap={this.handleClose}
					>
						Menu Item
					</MenuItem>
          <MenuItem
						onTouchTap={this.handleClose}
					>
						Menu Item 2
					</MenuItem>
        </Drawer>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    menu: state.menu
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MenuActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuDrawer)
