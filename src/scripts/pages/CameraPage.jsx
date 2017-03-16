import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as MenuActions from '../actions/menu'

class CameraPage extends Component {

	getCamera() {
		const id = this.props.params.id
		return this.props.cameras[id]
	}

	updateTitle() {
		this.props.setMenuTitle(this.getCamera().name)
	}

	componentDidMount() {
		this.updateTitle()
	}

	componentWillUnmount() {
		this.props.setMenuTitle(null)
	}

	componentDidUpdate(nextProps) {
		if (this.props.params.id !== nextProps.params.id) {
			this.updateTitle()
		}
	}

  render() {
		const camera = this.getCamera()

    return (
      <div
				style={{
					backgroundImage: `url('${camera.image}')`,
				}}
				className='cameraView'
			/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CameraPage)
