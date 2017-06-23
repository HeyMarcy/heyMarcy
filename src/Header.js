import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	headerNav: {
		top: 0,
		left: 0,
		zIndex: 100,
		position: 'absolute',
		width: '100%'
	},
	headerList: {
		margin: 0,
		display: 'flex',
		flexDirection: 'row',
		'justify-content': 'space-around',
		'list-style': 'none',
		'-webkit-margin-before': 0,
		'-webkit-margin-after': 0,
		'-webkit-margin-start': 0,
		'-webkit-margin-end': 0,
		'-webkit-padding-start': 0
	},
	headerListItem: {
		flex: '1 1 auto',
		'list-style': 'none'
	},
	headerListHover: {
		':hover': {
			color: '#fff',
			background: 'rgba(0,0,0,.2)'
		}
	},
	navLink: {
		fontSize: '.95em',
		listStyle: 'none',
		color: 'currentColor',
		textAlign: 'center',
		'text-transform': 'uppercase',
		'text-decoration': 'none',
		display: 'block',
		transition: '.2s',
		padding: '1em'
	}
});

const Header = () =>
	<header className={css(styles.headerNav)}>
		<ul className={css(styles.headerList)}>
			<li className={css(styles.headerListItem)}>
				<NavLink
					exact
					to="/"
					className={css(styles.navLink, styles.headerListHover)}
				>
					Home
				</NavLink>
			</li>
			<li className={css(styles.headerListItem)}>
				<NavLink
					to="/work"
					className={css(styles.navLink, styles.headerListHover)}
				>
					Work
				</NavLink>
			</li>
			<li className={css(styles.headerListItem)}>
				<NavLink
					to="/contact"
					className={css(styles.navLink, styles.headerListHover)}
				>
					Contact
				</NavLink>
			</li>
		</ul>
	</header>;

export default Header;
