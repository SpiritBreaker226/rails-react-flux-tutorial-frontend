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
	});
};