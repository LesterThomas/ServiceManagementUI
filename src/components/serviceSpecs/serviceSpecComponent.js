import React, { Component } from 'react';
import ServiceSpecCharacteristicList from './serviceSpecCharacteristicList';

class ServiceSpecComponent extends Component {
	
	render() {
		return (
			<div className=""> 
				<br />
				<div className="col-sm-4"> 
					<div className="panel panel-default ">
					<div className="panel-heading">Service Specification</div>
					<div className="panel-body">
					<table className="table">
							<tbody>
							<tr><th>ID</th><td>{this.props.serviceSpec.id} </td></tr>
							<tr><th>Name</th><td>{this.props.serviceSpec.name}</td></tr>
							<tr><th>Description</th><td>{this.props.serviceSpec.description}</td></tr>
							<tr><th>Lifecycle Status</th><td>{this.props.serviceSpec.lifecycleStatus}</td></tr>
							</tbody>
						</table>
					</div>
					</div>
				</div>
				{ this.props.serviceSpec.serviceSpecCharacteristic.length > 0 &&
				<div className="col-sm-8"> 
					<ServiceSpecCharacteristicList serviceSpecCharacteristic={this.props.serviceSpec.serviceSpecCharacteristic} />
				</div>
				}
			</div>
		);
	}
}

ServiceSpecComponent.propTypes = {
	serviceSpec:	React.PropTypes.object.isRequired
};


module.exports = ServiceSpecComponent;