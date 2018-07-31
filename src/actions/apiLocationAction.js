import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

var apiLocationActions = {

	updateapiLocation: function(apiLocation) {
		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_APILOCATION,
			apiLocation: apiLocation
		});
	}

};

module.exports = apiLocationActions;