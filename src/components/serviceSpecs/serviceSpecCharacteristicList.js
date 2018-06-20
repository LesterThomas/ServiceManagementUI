"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var toastr = require('toastr');
var ServiceSpecCharacteristicValueList = require('./serviceSpecCharacteristicValueList');


var ServiceSpecCharacteristicList = React.createClass({
	propTypes: {
		serviceSpecCharacteristic: React.PropTypes.array.isRequired
	},


	render: function() {
		var createServiceSpecCharacteristicRow = function(serviceSpecCharacteristic) {
			return (
				<tr key={serviceSpecCharacteristic.name}>
					<td>{serviceSpecCharacteristic.name}</td>
					<td>{serviceSpecCharacteristic.valueType} </td>
					<td>{serviceSpecCharacteristic.description} </td>
					<td>				
						<ServiceSpecCharacteristicValueList serviceSpecCharacteristicValue={serviceSpecCharacteristic.serviceSpecCharacteristicValue} />
					</td>
				</tr>
			);
		};

		return (
			<div > 
				<div className="panel panel-default">
					<div className="panel-heading">Service characteristics and values</div>
					<div className="panel-body">

						<table className="table">
							<thead>
								<th>Name</th>
								<th>Value Type</th>
								<th>Description</th>
								<th>Value</th>
							</thead>
							<tbody>
								{this.props.serviceSpecCharacteristic.map(createServiceSpecCharacteristicRow, this)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ServiceSpecCharacteristicList;