import React, { Component } from 'react'

export default class HomePage extends Component {
	render() {
		return (
			<div style={{
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: '#000000',
				backgroundImage: 'url("images/intro.jpg")',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}>
			</div>
		)
	}
}
