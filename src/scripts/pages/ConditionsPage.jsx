import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as MenuActions from '../actions/menu'

class ConditionsPage extends Component {

	componentDidMount() {
		this.props.setMenuTitle('Podmínky')
	}

	componentWillUnmount() {
		this.props.setMenuTitle(null)
	}

	render() {
		return (
			<section className="typo">
				<h1>
					Pravidla práce a připojení
				</h1>
				<ul>
					<li>Žák – osoba, které byla přidělena přístupová práva, musí dodržovat pravidla aktuálního školního řádu ISŠTE Sokolov.</li>
					<li>Jakákoliv neoprávněná připojení, stahování dat, nabourávání do systému a záměrné hledání „skulin“ k poškození nebo zneužití dat apod. bude posuzováno dle školního řádu, a to podmínečným vyloučením, nebo vyloučením ze školy, dle závažnosti poškození či zneužití systému případně i trestním stíháním.</li>
					<li>Žák je povinen svá přístupová data chránit a  uchovávat  jen pro svou potřebu, nesmí je poskytovat jiné (nepřidělené) osobě. </li>
					<li>Není dovoleno přenechávat vlastní přidělený přístupový čas jiným osobám.</li>
				</ul>
				<p>
					Další pravidla užívání  zde budou přibývat, proto je nutné při každém připojení  tato pravidla průběžně sledovat a dodržovat.
				</p>
			</section>
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

export default connect(mapStateToProps, mapDispatchToProps)(ConditionsPage)
