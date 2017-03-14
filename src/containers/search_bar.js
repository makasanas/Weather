import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = { term:'' }
		this.OnInputChange = this.OnInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	OnInputChange(event){
		this.setState({term: event.target.value })
	}

	onFormSubmit(event){
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({term:''});
	}

	render(){
		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="enter serach text"
					className="form-control"
					value= {this.state.term}
					onChange={this.OnInputChange}
				/>
				<div className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</div>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);