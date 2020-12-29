import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	NavbarText,
} from 'reactstrap';
import { Heart } from 'react-bootstrap-icons';
const NavBarReact = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar
			className='nav'
			dark
			fixed='true'
			fluid='true'
			color='grey-dark'
			expand='md'
		>
			<NavbarBrand href='/'>Blog</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className='mr-auto nav__list' navbar>
					<NavItem>
						<NavLink className='nav__item' href='/'>
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav__item' href='/posts'>
							Post
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav__item' href='/contact'>
							Contact
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav__item' href='/gallery'>
							Gallery
						</NavLink>
					</NavItem>
				</Nav>
				<NavbarText color='warning'>
					<Heart />
				</NavbarText>
			</Collapse>
		</Navbar>
	);
};

export default NavBarReact;
