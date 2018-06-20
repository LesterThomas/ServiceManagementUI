"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _serviceSpecs = [];

var ServiceSpecStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getAllServiceSpecs: function() {
		return _serviceSpecs;
	},

	getServiceSpecById: function(id) {
		return _.find(_serviceSpecs, {id: id});
	}
});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			_serviceSpecs = action.initialData.serviceSpecs;
			ServiceSpecStore.emitChange();
			break;
		case ActionTypes.CREATE_SERVICESPEC:
			_serviceSpecs.push(action.serviceSpec);
			ServiceSpecStore.emitChange();
			break;
		case ActionTypes.UPDATE_SERVICESPEC:
			var existingServiceSpec = _.find(_serviceSpecs, {id: action.serviceSpec.id});
			var existingServiceSpecIndex = _.indexOf(_serviceSpecs, existingServiceSpec); 
			_serviceSpecs.splice(existingServiceSpecIndex, 1, action.serviceSpec);
			ServiceSpecStore.emitChange();
			break;	
		case ActionTypes.DELETE_SERVICESPEC:
			_.remove(_serviceSpecs, function(serviceSpec) {
				return action.id === serviceSpec.id;
			});
			ServiceSpecStore.emitChange();
			break;
		default:
			// no op
	}
});

module.exports = ServiceSpecStore;