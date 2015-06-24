var ServerActionCreators = require('../actions/ServerActionCreators.react.jsx');
var SmallConstants = require('../constants/SmallConstants.js');
var request = require('superagent');

function _getErrors (res) {
	var errorMsgs = ["Something went wrong, please try again"];
	if ((json = JSON.parse(res.text))) {
		if (json['error']) {
			errorMsgs = [json['error']];
		} else {
			errorMsgs = [json['error']];
		}
	}

	return errorMsgs;
}

var APIEndpoints = SmallConstants.APIEndpoints;

module.exports = {
	createStory: function() {
		request.post(APIEndpoints.STORIES)
			.set('Accept', 'application/json')
			.set('Authorization', sessionStorage.getItem('accessToken'))
			.send({
				story: {
					title: title,
					body:  body
				}
			})
			.end(function(error, res) {
				if(res) {
					if(res.error) {
						var errorMsgs = _getErrors(res);
						ServerActionCreators.receiveCreatedStory(null, errorMsgs);
					} else {
						json = JSON.parse(res.text);
						ServerActionCreators.receiveCreatedStory(json, null);
					}
				}
			});
	},
	signup: function(email, username, password, passwordConfirmation) {
		request.post(APIEndpoints.REGISTRATION)
			.send({
					user: {
						email: email,
						username: username,
						password: password,
						passwordConfirmation: passwordConfirmation
				}
			})
			.set('Accept', 'application/json')
			.end(function(error, res) {
				if (res) {
					if(res.error) {
						var errorMsgs = _getErrors(res);
						ServerActionCreators.receiveLogin(null, errorMsgs);
					} else {
						json = JSON.parse(res.test);
						ServerActionCreators.receiveLogin(json, null);
					}
				}
			});
	},
	loadStories: function() {
		request.get(APIEndpoints.STORIES)
			.set('Accept', 'application/json')
			.set('Authorization', sessionStorage.getItem('accessToken'))
			.end(function(error, res) {
				if (res) {
					json = JSON.parse(res.text);
					ServerActionCreators.receiveStories(json);
				}
			});
	},
	loadStory: function(storyId) {
		request.get(APIEndpoints.STORIES + '/' + storyId)
			.set('Accept', 'application/json')
			.set('Authorization', sessionStorage.getItem('accessToken'))
			.end(function(error, res) {
				if (res) {
					json = JSON.parse(res.text);
					ServerActionCreators.receiveStory(json);	
				}
			});
	},
	login: function(email, password) {
		request.post(APIEndpoints.LOGIN)
			.send({
				username: email,
				password: password,
				grant_type: 'password'
			})
			.set('Accept', 'application/json')
			.end(function(error, res) {
				if (res) {
					if(res.error) {
						var errorMsgs = _getErrors(res);
						ServerActionCreators.receiveLogin(null, errorMsgs);
					} else {
						json = JSON.parse(res.test);
						ServerActionCreators.receiveLogin(json, null);
					}
				}
			});
	}
};