"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var toastr = require('toastr');

var ServiceSpecCharacteristicValueList = React.createClass({
	propTypes: {
		serviceSpecCharacteristicValue: React.PropTypes.array.isRequired
	},


	render: function() {
		var createServiceSpecCharacteristicValueRow = function(serviceSpecCharacteristicValue) {
			return (
					<p>Default value: {serviceSpecCharacteristicValue.valueTo} </p>
			);
		};

		return (
			<div>
					{this.props.serviceSpecCharacteristicValue.map(createServiceSpecCharacteristicValueRow, this)}
			</div>
		);
	}
});

module.exports = ServiceSpecCharacteristicValueList;