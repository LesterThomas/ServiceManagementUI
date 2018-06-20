"use strict";

//This file is mocking a web API by hitting hard coded data.
var serviceSpecs = require('./serviceSpecData').serviceSpecs;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(serviceSpec) {
	return serviceSpec.firstName.toLowerCase() + '-' + serviceSpec.lastName.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var ServiceSpecApi = {
	getAllServiceSpecs: function() {
		return _clone(serviceSpecs); 
	},

	getServiceSpecById: function(id) {
		var serviceSpec = _.find(serviceSpecs, {id: id});
		return _clone(serviceSpec);
	},
	
	saveServiceSpec: function(serviceSpec) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the serviceSpec to the DB via AJAX call...');
		
		if (serviceSpec.id) {
			var existingServiceSpecIndex = _.indexOf(serviceSpecs, _.find(serviceSpecs, {id: serviceSpec.id})); 
			serviceSpecs.splice(existingServiceSpecIndex, 1, serviceSpec);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new serviceSpecs in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			serviceSpec.id = _generateId(serviceSpec);
			serviceSpecs.push(serviceSpec);
		}

		return _clone(serviceSpec);
	},

	deleteServiceSpec: function(id) {
		console.log('Pretend this just deleted the serviceSpec from the DB via an AJAX call...');
		_.remove(serviceSpecs, { id: id});
	}
};

module.exports = ServiceSpecApi;