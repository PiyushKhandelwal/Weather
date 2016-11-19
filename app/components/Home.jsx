var React = require("react");
var NavBox = require("NavBox");

var Home = (props) => {
	return (
		<div>
			<NavBox/>
			{props.children}
		</div>
	)
}

module.exports = Home;