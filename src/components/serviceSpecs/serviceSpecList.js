import React, { Component } from 'react';
import { Link } from 'react-router';

class ServiceSpecList extends Component {

	render() {
		var createServiceSpecRow = function(serviceSpec) {
			return (
				<tr key={serviceSpec.id}>
					<td><Link to="manageServiceSpec" params={{id: serviceSpec.id}}>{serviceSpec.id}</Link></td>
					<td>{serviceSpec.name} </td>
					<td>{serviceSpec.description} </td>
				</tr>
			);
		};

		return (
			<div>
				<table className="table">
					<thead>
						<th>ID</th>
						<th>Name</th>
						<th>Description</th>

					</thead>
					<tbody>
						{this.props.serviceSpecs.map(createServiceSpecRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
}

ServiceSpecList.propTypes = {
	serviceSpecs: React.PropTypes.array.isRequired
};


module.exports = ServiceSpecList;