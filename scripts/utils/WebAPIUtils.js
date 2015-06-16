var ServerActionCreators = require('../actions/ServerActionCreators.react.jsx');
var SmallConstants = require('../constants/SmallConstants.js');
var request = request('superagent');

function _getErrors (res) {
	var errorMsgs = ["Something went wrong, please try again"];
	if ((json = JSON.parse(res.text))) {
		if (json['error']) {
			errorMsgs = json['error'];
		} else {
			errorMsgs = [json['error']];
		}
	}

	return errorMsgs;
}

var APIEndpoints = SmallConstants.APIEndpoints;

module.exports = {
	signup: function(email, password, passwordConfirmation) {
		request.post(APIEndpoints.REGISTRATION)
			.send({
					user: {
						username: email,
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
	}
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