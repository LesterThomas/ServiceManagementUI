import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

var InitializeActions = {
	initApp: function() {
		var defaultapiLocation = "http://localhost:8080/tmf-api/serviceCatalogManagement/v2/serviceSpecification";
		var dispatchData = {
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				apiLocation: {href: defaultapiLocation}
			}
		};
		Dispatcher.dispatch(dispatchData);	
	}
};

module.exports = InitializeActions;