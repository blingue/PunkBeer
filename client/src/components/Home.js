import _ from "lodash";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PunkAPI from 'punkapi-lib';

import { NavBar } from './NavBar';
import SearchBar from './SearchBar';
import BeerList from './BeerList';

import { beerActions } from '../actions/beers';


class Home extends Component {

	constructor(props) {
		super(props);
		// this.state = {
		// 	//beers: PunkAPI.beers(this.getApiOptions())
		// }
		// Set initial state
		this.props.dispatch(beerActions.fetchBeersRequest());

		this.handleLogout = this.handleLogout.bind(this);
		this.beerSearch = this.beerSearch.bind(this);
		this.getApiOptions = this.getApiOptions.bind(this);
		this.processResponse = this.processResponse.bind(this);
	}

	componentDidMount() {
		let _self = this;
		const abv = this.getApiOptions().abv_lt;
		const options = abv ? `?abv_lt=${abv}`:'';
	
		fetch(`https://api.punkapi.com/v2/beers${options}`)
			.then(_self.processResponse).then(beers => {
				_self.props.dispatch(beerActions.fetchBeersSuccess(beers));
				_self.setState({beers});
			}).catch(rejected => {				
				_self.props.dispatch(beerActions.fetchBeersError(rejected));
			});
	 }

	processResponse(response) {
		return response.text().then(text => {
			if(response.status === 200) return text;
			else return Promise.reject("BeerPage.error_api");
		});
	}

	getApiOptions(){
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
		if(beer){ options.beer_name = beer }
		this.setState({
			beers: PunkAPI.beers(options)
		});
	}

	render() {
		const beerSeach = _.debounce(beer => {
			this.beerSearch(beer);
		}, 300);

		if (this.props.beers.requestState === 'FULFILLED') {
			return (
				<div>
					<NavBar />
					<SearchBar onSearchTermChange={beerSeach} />
					<BeerList beers={JSON.parse(this.props.beers.beers)} />
				</div>
			)
		  }
		return <Loading />

	}
}

export const Loading = () =>
  <p className="beerLoading">
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
  </p>;

function mapStateToProps(state) {
    const { authentication } = state;
	const { user } = authentication;
	const { beers } = state;
	
    return {
		user,
		beers
    };
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };