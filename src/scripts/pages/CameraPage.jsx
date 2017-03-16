import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as MenuActions from '../actions/menu'

class CameraPage extends Component {

  render() {
		const id = this.props.params.id
		const camera = this.props.cameras[id]

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
