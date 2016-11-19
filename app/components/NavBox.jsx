var React = require("react");
var {Link, IndexLink} = require("react-router");


var NavBox = (props) => {
	return (
			<div>
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>&nbsp;
				<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>&nbsp;
				<Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
			</div>
	);
}

module.exports = NavBox;