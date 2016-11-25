var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Home = require("Home");
var Weather = require("Weather");
var About = require("About");
var Example = require("Example");

require('style!css!bootstrap/dist/css/bootstrap.min.css');
require('style!css!sass!public/css/app.scss');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Home}>
			<Route path="about" component={About}/>
			<Route path="example" component= {Example}/>
			<IndexRoute component={Weather}/>
		</Route>
	</Router>,
	document.getElementById("root")
);