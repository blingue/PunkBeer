import _ from "lodash";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PunkAPI from 'punkapi-lib';

import SearchBar from './SearchBar';
import BeerList from './BeerList';


class HomePage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			beers: PunkAPI.beers({})
		};
		this.handleLogout = this.handleLogout.bind(this);
		this.beerSearch = this.beerSearch.bind(this);
	}

	handleLogout() {
		// reset login status
		// This need to be an action
		localStorage.removeItem("user");
	}

	beerSearch(beer) {
		const options = (beer) ? { beer_name: beer } : '';
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
				<p><Link onClick={this.handleLogout} to="/login">Logout</Link></p>
				<SearchBar onSearchTermChange={beerSeach} />
				<BeerList beers={this.state.beers} />
			</div>
		)
	}
}

export default HomePage;