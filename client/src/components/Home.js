import _ from "lodash";
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PunkAPI from 'punkapi-lib';

import { NavBar } from './NavBar';
import SearchBar from './SearchBar';
import BeerList from './BeerList';


class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			beers: PunkAPI.beers(this.getApiOptions())
		}
		this.handleLogout = this.handleLogout.bind(this);
		this.beerSearch = this.beerSearch.bind(this);
		this.getApiOptions = this.getApiOptions.bind(this);
	}

	getApiOptions(beer){
		const { user } = this.props;
		const acesssLevel = user.acesssLevel;
		let options = {};
		switch(acesssLevel){
			case 1: // user role Will have access to beers with an Alcohol by volume less than 4.
				options = { abv_lt: 4 }; 
				break;
			case 2: // superuser role Will have access to beers with an Alcohol by volume less than 8.
				options = { abv_lt: 8 };
				break;
		}
		return options;
	}

	handleLogout() {
		// reset login status
		localStorage.removeItem("user");
	}

	beerSearch(beer) {

		let options = this.getApiOptions();
		
		
		(beer) ? { beer_name: beer } : '';


		this.setState({
			beers: PunkAPI.beers(options)
		});
	}

	render() {
		const beerSeach = _.debounce(beer => {
			this.beerSearch(beer);
		}, 300);

		console.log(this.state.beers);

		return (
			<div>
				<NavBar />
				<SearchBar onSearchTermChange={beerSeach} />
				<BeerList beers={this.state.beers} />
			</div>
		)
	}
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user,
    };
}
const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };