var React = require("react");
var {Link, IndexLink} = require("react-router");

require('bootstrap/dist/js/bootstrap.min.js');

var NavBox = (props) => {
	return (
		<div >
				<nav className="navbar navbar-inverse">
				 <div className="container">
				 	<div className="navbar-header">
				 		<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        					<span className="sr-only">Toggle navigation</span>
        					<span className="icon-bar"></span>
        					<span className="icon-bar"></span>
        					<span className="icon-bar"></span>
      					</button>
				 		<a className="navbar-brand" href="#">React Weather</a>
				 	</div>
				 	<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				 		<ul className="nav navbar-nav navbar-right">
				 			<li>
				 				<IndexLink to="/" activeClassName="active">Weather</IndexLink>
				 			</li>
				 			<li>
				 				<Link to="/about" activeClassName="active">About</Link>
				 			</li>
				 			<li>
				 				<Link to="/example" activeClassName="active">Example</Link>
				 			</li>
				 		</ul>
				 	</div>
				 </div>
				</nav>
			</div>
	);
}

module.exports = NavBox;