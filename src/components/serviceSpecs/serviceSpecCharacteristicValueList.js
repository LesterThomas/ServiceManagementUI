import React, { Component } from 'react';

class ServiceSpecCharacteristicValueList extends Component {
	
	render() {
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
}

ServiceSpecCharacteristicValueList.propTypes = {
	serviceSpecCharacteristicValue: React.PropTypes.array.isRequired
};

module.exports = ServiceSpecCharacteristicValueList;