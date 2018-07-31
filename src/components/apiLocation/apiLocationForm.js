import Input from '../common/textInput';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class apiLocationForm extends Component {
	render() {
		console.log('Rendering API Location Form', this.props);
		return (
			<form>
				<h1>Manage API Location</h1>
				<Input
					name="href"
					label="API Location"
					value={this.props.apiLocation.href}
					onChange={this.props.onChange}
					error={this.props.errors} />
				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
			</form>
		);
	}
}

apiLocationForm.propTypes = {
	apiLocation: PropTypes.object.isRequired,
	onSave:	PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object
};


module.exports = apiLocationForm;