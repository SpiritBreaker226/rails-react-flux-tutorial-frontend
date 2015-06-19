var SmallAppDispatcher = require('../dispatcher/SmallAppDispatcher.js');
var SmallConstants = require('../constants/SmallConstants.js');

var ActionTypes = SmallConstants.ActionTypes;

module.exports {
	loadStories: Function() {
		SmallAppDispatcher.handleViewAction({
			type: ActionTypes.LOAD_STORIES
		});

		WebAPIUtils.loadStories();
	},
	loadStory: Function(storyId) {
		SmallAppDispatcher.handleViewAction({
			type: ActionTypes.LOAD_STORY,
			storyId: storyId
		});

		WebAPIUtils.loadStory(storyId);
	},
	createStory: function(title, body) {
		SmallAppDispatcher.handleViewAction({
			type: ActionTypes.CREATE_STORY,
			title: title,
			body: body
		});
	}
};