var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('../components/Header.react.jsx');
var SessionStore = require('../store/SessionStore.react.jsx');
var RouteStore = require('../stores/RouteStore.react.jsx');

function getStateFromStore() {
	return {
		isLoggedIn: SessionStore.isLoggedIn(),
		email: SessionStore.getEmail()
	};
}

var SmallApp = React.createClass({
	getInitialState: function() {
		return getStateFromStore();
	},
	componentDidMount: function() {
		SessionStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		SessionStore.removeChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState(getStateFromStore());
	},
	render: function() {
		return (
			<div className="app">
				<Header 
					isLoggedIn={this.state.isLoggedIn}
					email={this.state.email} />
				<RouteHandler />
			</div>
		);
	}
});

module.exports = SmallApp;
