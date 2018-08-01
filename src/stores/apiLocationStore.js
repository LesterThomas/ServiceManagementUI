import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import _ from 'lodash';

var CHANGE_EVENT = 'change';

var _apiLocation = {};

var apiLocationStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getapiLocation: function() {
		return _apiLocation;
	}

});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			_apiLocation = action.initialData.apiLocation;
			apiLocationStore.emitChange();
			break;
		case ActionTypes.UPDATE_APILOCATION:
			_apiLocation = action.apiLocation;
			apiLocationStore.emitChange();
			break;	
		default:
			// no op
	}
});

module.exports = apiLocationStore;