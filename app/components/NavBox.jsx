var React = require("react");
var {Link, IndexLink} = require("react-router");


var NavBox = (props) => {
	return (
		<div className="container" style={{paddingTop: '20px',paddingBottom:'20px'}}>
				<nav className="navbar navbar-default">
				 <div className="container-fluid">
				 	<div className="navbar-header">
				 		<a className="navbar-brand" href="#">React Weather</a>
				 	</div>
				 	<div className="collapse navbar-collapse">
				 		<ul className="nav navbar-nav">
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