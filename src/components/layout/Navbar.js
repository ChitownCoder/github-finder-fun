import React, { Component } from 'react';
import PropTypes from 'prop-types'


export class Navbar extends Component {
  static defaultProps ={
    title: 'Github Finder',
    icon: 'fa fa-github'
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }


	render() {
		return (
			//*I HAVE USED BG-PRIMARY TO CHANGE THE COLOR OF THE NAV AREA
			<nav className="navbar bg-primary">
				<h1>
					{/*  I HAVE USED FONTAWESOME */}
					<i className={this.props.icon} />
					{this.props.title}
				</h1>
			</nav>
		);
	}
}

export default Navbar;
