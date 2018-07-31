import React, { Component } from 'react';
import Router, { Link } from 'react-router';

class Home extends Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>Service Management</h1>
				<p>Service Catalogue, Service Ordering and Service Inventory.</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}
}

module.exports = Home;