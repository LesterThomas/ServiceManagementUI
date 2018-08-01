import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import _ from 'lodash';


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

function getServiceSpec(inHref){
	fetch(inHref) 
		.then(function(response) {
			return response.json();
		})
		.then(function(myJson) {
			console.log('serviceSpecStore.getServiceSpec returned', myJson);
			_serviceSpecs = myJson;
			ServiceSpecStore.emitChange();
		});
}

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE:
			getServiceSpec(action.initialData.apiLocation.href);
			break;
		case ActionTypes.UPDATE_APILOCATION:
			getServiceSpec(action.apiLocation.href);
			break;
		default:
			// no op
	}
});

module.exports = ServiceSpecStore;