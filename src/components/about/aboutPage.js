import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div>
				<h1>About</h1>
				<p>
					This application allows you to view Service Specifications from the Service Catalog (future editions will add placing Service Orders and viewing the Service Inventory).
					It sits on top of the TM Forum Open-APIs for Service Catalogue, Service Order and Service Inventory.

					See:
					<ul>
					<li><a target="new" href="https://github.com/tmforum-apis/TMF633_ServiceCatalog">TMF633_ServiceCatalog</a></li>
					<li><a target="new" href="https://github.com/tmforum-apis/TMF641_ServiceOrder">TMF641_ServiceOrder</a></li>
					<li><a target="new" href="https://github.com/tmforum-apis/TMF638_ServiceInventory">TMF641_ServiceOrder</a></li>
					</ul>

					The application is a simple viewer for demonstration purposes only.
				
				</p>
			</div>
		); 
	}
}

module.exports = About;