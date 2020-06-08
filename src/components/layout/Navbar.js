import React from 'react';
import PropTypes from 'prop-types'


const Navbar = ({icon, title}) =>  {
		return (
			//*I HAVE USED BG-PRIMARY TO CHANGE THE COLOR OF THE NAV AREA
			<nav className="navbar bg-primary">
				<h1>
					{/*  I HAVE USED FONTAWESOME */}
					<i className={icon} />
					{title}
				</h1>
			</nav>
		);

}

Navbar.defaultProps ={
	title: 'Github Finder',
	icon: 'fa fa-github-alt' /*CALLING FONT AWESOME HERE*/ 
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};


export default Navbar;
