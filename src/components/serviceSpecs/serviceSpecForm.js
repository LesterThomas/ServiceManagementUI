"use strict";

var React = require('react');
var Input = require('../common/textInput');

var ServiceSpecForm = React.createClass({
	propTypes: {
		serviceSpec:	React.PropTypes.object.isRequired,
		onSave:	React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},

	render: function() {
		return (
			<div>
				<h1>View Service Specification</h1>
				<br />
				<table className="table">
					<tbody>
					<tr><th>ID</th><td>{this.props.serviceSpec.id} </td></tr>
					<tr><th>Name</th><td>{this.props.serviceSpec.name}</td></tr>
					<tr><th>Description</th><td>{this.props.serviceSpec.description}</td></tr>
					</tbody>
				</table>

			</div>
		);
	}
});

module.exports = ServiceSpecForm;