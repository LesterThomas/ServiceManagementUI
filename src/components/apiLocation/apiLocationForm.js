"use strict";

var React = require('react');
var Input = require('../common/textInput');

var apiLocationForm = React.createClass({
	propTypes: {
		apiLocation: React.PropTypes.object.isRequired,
		onSave:	React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},

	render: function() {
		console.log('Rendering API Location Form', this.props);

		return (
			<form>
				<h1>Manage API Location</h1>
				<Input
					name="href"
					label="API Location"
					value={this.props.apiLocation.href}
					onChange={this.props.onChange}
					error={this.props.errors.href} />


				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
			</form>
		);
	}
});
console.log('In API Location Form', this.props);

module.exports = apiLocationForm;