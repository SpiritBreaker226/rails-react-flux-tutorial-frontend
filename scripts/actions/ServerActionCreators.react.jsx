var SmallAppDispatcher = require('../dispatcher/SmallAppDispatcher.js');
var SmallConstants = require('../constants/SmallConstants.js');

var ActionTypes = SmallConstants.ActionTypes;

module.exports = {
	receiveLogin: function(json, errors) {
		SmallAppDispatcher.handleServerActtion({
			type: ActionTypes.LOGIN_RESPONSE,
			json: json,
			errors: errors
		});
	},
	receiveStories: function(json) {
		SmallAppDispatcher.handleServerActtion({
			type: ActionTypes.RECEIVE_STORIES,
			json: json
		});
	},
	receiveStory: function(json) {
		SmallAppDispatcher.handleServerActtion({
			type: ActionTypes.RECEIVE_STORY,
			json: json
		});
	}
};
