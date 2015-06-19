var React = require('react');

var ErrorNotice = React.createClass({
	render: function() {
		return (
			<div className="error-notice">
				<ul>
					{
						this.props.errors.map(function() {
							return <li className="error-notice__error" key={"error-" + index}>{error}</li>;
						})
					}
				</ul>
			</div>
		);
	}
});

module.exports = ErrorNotice;
