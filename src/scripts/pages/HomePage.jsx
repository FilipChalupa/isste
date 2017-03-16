import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

export default class HomePage extends Component {
  render() {
    return (
			<div style={{
				padding: '60px 15px 15px',
				margin: '0 auto',
				maxWidth: 480,
			}}>
				<Card style={{textAlign: 'center'}}>
					<CardTitle title='ISSTE'/>
					<CardText>
						Tento web slouží jako podpůrný nástroj pro výuku Ele na <a href='http://www.isste.cz/www/script/main.php?ac=page&amp;id=10' rel='noopener' target='_blank'>ISSTE</a>.
					</CardText>
				</Card>
			</div>
    )
  }
}
