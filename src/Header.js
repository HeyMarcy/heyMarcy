import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
const screenSize = {
	smartphoneXS: '@media only screen and (max-width: 369px)',
	smartphone:
		'@media only screen and (min-width: 370px) and (max-width: 479px)',
	smartphone:
		'@media only screen and (min-width: 370px) and (max-width: 479px)',
	smartphoneLandscape:
		'@media only screen and (min-width: 480px) and (max-width: 767px)',
	tablet: '@media only screen and (min-width: 768px) and (max-width: 991px)',
	desktop: '@media only screen and (min-width: 992px)and (max-width: 1220px)',
	desktopXL: '@media only screen and (min-width: 1221px)'
};

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
			background: 'rgba(0,0,0,.1)'
		}
	},
	navLink: {
		fontSize: '1em',
		'letter-spacing': '1px',
		listStyle: 'none',
		color: 'currentColor',
		textAlign: 'center',
		'text-transform': 'uppercase',
		'text-decoration': 'none',
		display: 'block',
		transition: '.2s',
		padding: '.5em',
		'padding-top': '.75em',

		[screenSize.desktop]: {
			fontSize: '1.25em'
		},
		[screenSize.desktopXL]: {
			fontSize: '1.4em'
		}
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
