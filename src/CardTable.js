import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './CardTable.css';

class CardTable extends Component {
	render() {
		return (
			<div className="CardTable">
				<h3 className={this.props.headingColor}>{this.props.heading}</h3>
				<Grid className="container">
					<Row>
						<Col xs={6}><h4 className="labels">{this.props.labelOne}</h4></Col>
						<Col xs={6}><h4 className="labels">{this.props.labelTwo}</h4></Col>
					</Row>
					<Row>
						<Col xs={6}><p className="details">{this.props.itemOne}</p></Col>
						<Col xs={6}><p className="details">{this.props.itemOneCost}</p></Col>
					</Row>
					<Row>
						<Col xs={6}><p className="details">{this.props.itemTwo}</p></Col>
						<Col xs={6}><p className="details">{this.props.itemTwoCost}</p></Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default CardTable;