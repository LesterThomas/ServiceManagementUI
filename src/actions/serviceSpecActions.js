import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

var ServiceSpecActions = {
	createServiceSpec: function(serviceSpec) {
		//var newServiceSpec = ServiceSpecApi.saveServiceSpec(serviceSpec);
		//Hey dispatcher, go tell all the stores that an serviceSpec was just created.
		/*Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_SERVICESPEC,
			serviceSpec: newServiceSpec
		});*/
	},

	updateServiceSpec: function(serviceSpec) {
		//var updatedServiceSpec = ServiceSpecApi.saveServiceSpec(serviceSpec);
		/*Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_SERVICESPEC,
			serviceSpec: updatedServiceSpec
		});*/
	},

	deleteServiceSpec: function(id) {
		//ServiceSpecApi.deleteServiceSpec(id);
		/*Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_SERVICESPEC,
			id: id
		});*/
	}
};

module.exports = ServiceSpecActions;