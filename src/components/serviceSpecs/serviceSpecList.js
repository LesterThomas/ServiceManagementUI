"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ServiceSpecActions = require('../../actions/serviceSpecActions');
var toastr = require('toastr');

var ServiceSpecList = React.createClass({
	propTypes: {
		serviceSpecs: React.PropTypes.array.isRequired
	},

	deleteServiceSpec: function(id, event) {
		event.preventDefault();
		ServiceSpecActions.deleteServiceSpec(id);
		toastr.success('ServiceSpec Deleted');
	},

	render: function() {
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
});

module.exports = ServiceSpecList;