"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var InitializeActions = {
	initApp: function() {

		fetch("http://localhost:8080/tmf-api/serviceCatalogManagement/v2/serviceSpecification") //'http://localhost:9005/serviceSpec.json')
		.then(function(response) {
			return response.json();
		})
		.then(function(myJson) {
			console.log(myJson);
			var dispatchData = {
				actionType: ActionTypes.INITIALIZE,
				initialData: {
					serviceSpecs: myJson
				}
			};
			Dispatcher.dispatch(dispatchData);	
		});

	}
};

module.exports = InitializeActions;