var React = require('react');

var WebAPIUtils = require('../../utils/WebAPIUtils.js');
var StoryStore = require('../../stores/StoryStore.react.jsx');
var ErrorNotice = require('../../components/common/ErrorNotice.react.jsx');
var StoryActionCreators = require('../../action/StoryActionCreators.react.jsx');

var Router = require('react-router');
var Link = Router.Link;
var timeago = require('timeago');

var StoriesPage = React.createClass({
	getInitialState: function() {
		return {
			stores: StoryStore.getAllStories(),
			errors = []
		};
	}
	componentDidMount: function() {
		StoryStore.addChangeListener(this._onChange);
		StoryActionCreators.loadStories();
	},
	componentWillUnmount: function() {
		StoryStore.removeChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState({
			stores: StoryStore.getAllStories(),
			errors: StoryStore.getErrors()
		});
	},
	render: function() {
		var errors = (this.state.errors.length > 0) ? <ErrorNotice errors-{this.state.errors} /> : <div></div>;
		return (
			<div>
				{errors}
				<div className="row">
					<StoriesList stores={this.state.stores} />
				</div>
			</div>
		);
	}
});

module.exports = StoriesPage;