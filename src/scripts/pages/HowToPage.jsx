import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

import * as MenuActions from '../actions/menu'

class HowToPage extends Component {

	state = {
    stepIndex: 0,
  }

	componentDidMount() {
		this.props.setMenuTitle('Postupy')
	}

	componentWillUnmount() {
		this.props.setMenuTitle(null)
	}

	handleNext = () => {
    const {stepIndex} = this.state
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1})
    }
  }

  handlePrev = () => {
    const {stepIndex} = this.state
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1})
    }
  }

	renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
				{step < 2 && (
					<RaisedButton
						label="Další"
						disableTouchRipple={true}
						disableFocusRipple={true}
						primary={true}
						onTouchTap={this.handleNext}
						style={{marginRight: 12}}
					/>
				)}
        {step > 0 && (
          <FlatButton
            label="Předchozí"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    )
  }

	renderVPNTable() {
		return (
			<Table
				selectable={false}
			>
				<TableHeader
					displaySelectAll={false}
					adjustForCheckbox={false}
				>
					<TableRow>
						<TableHeaderColumn>Název</TableHeaderColumn>
						<TableHeaderColumn>Hodnota</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody
					displayRowCheckbox={false}
					showRowHover={true}
				>
					<TableRow>
						<TableRowColumn>Název připojení</TableRowColumn>
						<TableRowColumn>ISSTE-Ele <i style={{fontStyle: 'italic'}}>(případně vlastní)</i></TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Adresa serveru</TableRowColumn>
						<TableRowColumn>160.218.100.233</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Druh připojení</TableRowColumn>
						<TableRowColumn>L2TP/IPsec se sdíleným klíčem</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Sdílený klíč</TableRowColumn>
						<TableRowColumn><i style={{fontStyle: 'italic'}}>Předáno učitelem</i></TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Způsob přihlášení</TableRowColumn>
						<TableRowColumn>Jméno a heslo</TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Jméno</TableRowColumn>
						<TableRowColumn><i style={{fontStyle: 'italic'}}>Přiděleno učitelem</i></TableRowColumn>
					</TableRow>
					<TableRow>
						<TableRowColumn>Heslo</TableRowColumn>
						<TableRowColumn><i style={{fontStyle: 'italic'}}>Přiděleno učitelem</i></TableRowColumn>
					</TableRow>
				</TableBody>
			</Table>
		)
	}

  render() {
		const {stepIndex} = this.state

		return (
			<div style={{
				margin: 'auto',
				maxWidth: 640,
			}}>
				<Stepper
					activeStep={stepIndex}
					linear={false}
					orientation='vertical'
				>
					<Step>
						<StepButton onTouchTap={() => this.setState({stepIndex: 0})}>
							Připojení k VPN
						</StepButton>
						<StepContent>
							<div style={{margin: '15px 0'}}>
								{this.renderVPNTable()}
							</div>
							{this.renderStepActions(0)}
						</StepContent>
					</Step>
					<Step>
						<StepButton onTouchTap={() => this.setState({stepIndex: 1})}>
							Připojení k PLC
						</StepButton>
						<StepContent>
							<p style={{margin: '15px 0'}}>
								IP adresy PLC jsou ve tvaru <b style={{fontWeight: 'bold'}}>10.0.1.10<u>1</u></b>, kde poslední, podtržená číslice odpovídá číslu PLC.
								<br />
								Port zůstává výchozí <b style={{fontWeight:'bold'}}>61682</b>.
							</p>
							{this.renderStepActions(1)}
						</StepContent>
					</Step>
					<Step>
						<StepButton onTouchTap={() => this.setState({stepIndex: 2})}>
							Zobrazení kamery
						</StepButton>
						<StepContent>
							<p style={{margin: '15px 0'}}>
								Aktuální obraz z kamer je možné zobrazit na tomto webu zvolením kamery v levém menu.
							</p>
							{this.renderStepActions(2)}
						</StepContent>
					</Step>
				</Stepper>
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

export default connect(mapStateToProps, mapDispatchToProps)(HowToPage)
