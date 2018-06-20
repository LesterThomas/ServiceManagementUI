"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _apiLocation = {};

var apiLocationtore = assign({}, EventEmitter.prototype, {
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
			apiLocationtore.emitChange();
			break;
		case ActionTypes.CREATE_APILOCATION:
			_apiLocation.push(action.serviceSpec);
			apiLocationtore.emitChange();
			break;
		case ActionTypes.UPDATE_APILOCATION:
			var existingServiceSpec = _.find(_apiLocation, {id: action.serviceSpec.id});
			var existingServiceSpecIndex = _.indexOf(_apiLocation, existingServiceSpec); 
			_apiLocation.splice(existingServiceSpecIndex, 1, action.serviceSpec);
			apiLocationtore.emitChange();
			break;	
		case ActionTypes.DELETE_APILOCATION:
			_.remove(_apiLocation, function(serviceSpec) {
				return action.id === serviceSpec.id;
			});
			apiLocationtore.emitChange();
			break;
		default:
			// no op
	}
});

module.exports = apiLocationtore;