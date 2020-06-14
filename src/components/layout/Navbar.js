import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
	return (
		//* I HAVE USED BG-PRIMARY TO CHANGE THE COLOR OF THE NAV AREA
		<nav className="navbar bg-primary">
			<h1>
				{/*  I HAVE USED FONTAWESOME */}
				<i className={icon} />
				{title}
			</h1>

			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fa fa-github-alt' /*CALLING FONT AWESOME HERE*/,
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
