import React, { Component } from 'react';
import './CardImages.css';

class CardImages extends Component {
	render() {
		return (
			<img 
				className="CardImages" 
				src={this.props.imageDetails.source}
				alt={this.props.imageDetails.alt} />
		)
	}
}

export default CardImages;