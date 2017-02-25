import React, { Component } from 'react';
import './App.css';
import PageTitle from './PageTitle';
import IntroCard from './IntroCard';
import CardTable from './CardTable';

var title = {
	title: "Spring Break 2017"
};

var destinations = {
	colorado: {
		name: "Colorado",
		description: "Some of the best alpine views in the world.",
		cta: "See Flights >",
		imageDetails: {
			source: "http://www.jaymoorestudio.com/wp-content/uploads/2013/06/September-Snow-Maroon-Bells_30x40_2008.jpg",
			alt: "Picture of Maroon Bells"			
		}
	},
	florida: {
		name: "Florida",
		description: "Suns out butts out!",
		cta: "See Flights >",
		imageDetails: {
			source: "http://bit.ly/2lGrxZR",
			alt: "Picture of the Florida Keys"
		}
	}
};

var tables = {
	flights: {
		heading: "Flights",
		labelOne: "Departure City",
		labelTwo: "Roundtrip",
		itemOne: "Newark",
		itemTwo: "Boston",
		colorado: {
			headingColor: "colorado",
			itemOneCost: "$260",
			itemTwoCost: "$310"
		},
		florida: {
			headingColor: "florida",
			itemOneCost: "$270",
			itemTwoCost: "$390"
		}
	}
}

class App extends Component {
  render() {
    return (
    	<div>
	        <PageTitle title={title.title} />
	        <IntroCard
	        	imageDetails={destinations.colorado.imageDetails}
	        	name={destinations.colorado.name}
				description={destinations.colorado.description}
				cta={destinations.colorado.cta} />
			<CardTable
				headingColor={tables.flights.colorado.headingColor}
				heading={tables.flights.heading}
				labelOne={tables.flights.labelOne}
				labelTwo={tables.flights.labelTwo}
				itemOne={tables.flights.itemOne}
				itemOneCost={tables.flights.colorado.itemOneCost}
				itemTwo={tables.flights.itemTwo}
				itemTwoCost={tables.flights.colorado.itemTwoCost} />
			<IntroCard 
				imageDetails={destinations.florida.imageDetails}
				name={destinations.florida.name}
				description={destinations.florida.description}
				cta={destinations.florida.cta} />
			<CardTable
				headingColor={tables.flights.florida.headingColor}
				heading={tables.flights.heading}
				labelOne={tables.flights.labelOne}
				labelTwo={tables.flights.labelTwo}
				itemOne={tables.flights.itemOne}
				itemOneCost={tables.flights.florida.itemOneCost}
				itemTwo={tables.flights.itemTwo}
				itemTwoCost={tables.flights.florida.itemTwoCost} />
		</div>
    );
  }
}

export default App;
