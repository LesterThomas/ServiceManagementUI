import React, { Component } from 'react';
import ServiceSpecCharacteristicValueList from './serviceSpecCharacteristicValueList';


class ServiceSpecCharacteristicList extends Component {

	render() {
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
}

ServiceSpecCharacteristicList.propTypes = {
	serviceSpecCharacteristic: React.PropTypes.array.isRequired
};


module.exports = ServiceSpecCharacteristicList;