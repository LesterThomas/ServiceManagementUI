"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var ServiceSpecApi = require('../api/serviceSpecApi');

var InitializeActions = {
	initApp: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				serviceSpecs: ServiceSpecApi.getAllServiceSpecs()
			}
		});
	}
};

module.exports = InitializeActions;