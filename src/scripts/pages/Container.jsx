import React, { Component } from 'react'

import Menu from '../components/Menu'

export default class Container extends Component {

  render() {
    return (
      <div className="layout">
				<Menu />
				<div className="layout-content">
					{this.props.children}
				</div>
			</div>
    )
  }
}
