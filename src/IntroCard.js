import React, { Component } from 'react';
import './IntroCard.css';
import CardImages from './CardImages';

class IntroCard extends Component {
	render() {
		return (
			<div className="IntroCard">
				<CardImages imageDetails={this.props.imageDetails} />
				<h2 className="name">{this.props.name}</h2>
				<p className="description">{this.props.description}</p>
				<a href="#" className="cta">{this.props.cta}</a>
			</div>
		);
	}
}

export default IntroCard;