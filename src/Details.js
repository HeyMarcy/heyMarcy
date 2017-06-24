import React from 'react';
import SamplePreview from './SamplePreview';
import { StyleSheet, css } from 'aphrodite';
import { samplesData } from './samplesData';
import ReactLogo from '../assets/ReactLogo';
import ExpoLogo from '../assets/ExpoLogo';
import PhoneLogo from '../assets/PhoneLogo';
import ResponsiveTagline from '../assets/ResponsiveTagline';
import LaptopTagline from '../assets/LaptopTagline';
import UXUITagline from '../assets/UXUITagline';

const Pipe = () => {
	return <li><span style={{padding:'12px', opacity: '.5'}}>|</span></li>
}

const FourSamples = props => {
	return (
		<div className={css(sampleStyle.flexWrapper)}>
			<div className={css(sampleStyle.quarter)}>
				<div className={css(sampleStyle.iconWrapper)}>
				<PhoneLogo />
				</div>
				<div className={css(sampleStyle.spacer)} />
				<h3 className={css(sampleStyle.title)}>Stop Drop & Selfie</h3>
				<p>A realtime chat and photosharing app</p>
				<ul className={css(sampleStyle.listStyle)}>
				<li>React Native</li>
				<Pipe />
				<li>Expo</li>
				<Pipe />
				<li>Redux</li>
				<Pipe />
				<li>WebSockets</li>
				</ul>
			</div>

			<div className={css(sampleStyle.quarter)}>
				<div className={css(sampleStyle.iconWrapper)}>
				<ResponsiveTagline />

				</div>
				<div className={css(sampleStyle.spacer)} />
				<h3 className={css(sampleStyle.title)}>Apprenda Portugese</h3>
				<p>A language learing app</p>
				<ul className={css(sampleStyle.listStyle)}>
				<li>React</li>
				<Pipe />
				<li>Redux</li>
				<Pipe />
				<li>Router</li>
				<Pipe />
				<li>MongoDB</li>
				<Pipe />
				<li>Express</li>
				</ul>
			</div>

			<div className={css(sampleStyle.quarter)}>
				<div className={css(sampleStyle.iconWrapper)}>
				<LaptopTagline />
				</div>
				<div className={css(sampleStyle.spacer)} />
				<h3 className={css(sampleStyle.title)}>My Day Weather</h3>
				<p>A personal weather app</p>
				<ul className={css(sampleStyle.listStyle)}>
				<li>React</li>
				<Pipe />
				<li>Redux</li>
				<Pipe />
				<li>Router</li>
				<Pipe />
				<li>Web API</li>
				</ul>
			</div>

			<div className={css(sampleStyle.quarter)}>
				<div className={css(sampleStyle.iconWrapper)}>
				<UXUITagline />
				</div>
				<div className={css(sampleStyle.spacer)} />
				<h3 className={css(sampleStyle.title)}>Interface and Interaction Design</h3>
				<p>Wireframes, User Journeys, Mockups and Prototypes</p>
				<ul className={css(sampleStyle.listStyle)}>
				<li>Sketch</li>
				<Pipe />
				<li>Illustrator</li>
				<Pipe />
				<li>Photoshop</li>
				<Pipe />
				<li>Axure</li>
				<Pipe />
				<li>Invision</li>
				</ul>
			</div>
		</div>
	);
};
export default FourSamples;

const sampleStyle = StyleSheet.create({
	spacer: {
		height: '100px'
	},
	flexWrapper: {
		display: 'flex',
		'flex-wrap': 'wrap',
		width: '100vw',
		paddingTop: '50px',
		'justify-content': 'center',
		overflow: 'hidden'
	},
	iconWrapper: {
		display: 'flex',
		'justify-content':'center',
		margin: '.5em auto 1em ',
		height: '120px',
	},

	iconStyle: {
		'align-self': 'center'
	},
	logoWrapper: {
		height: '50px',
		width: '50px',
	},
	logoStyle: {
		':hover': { fill: 'darkslateblue' }
	},
	quarter: {
		textAlign:'center',
		display:'flex',
		'flex-direction': 'column',
		'justify-content': 'center',
		width: '42vw',
		padding: '24px',
		background: 'rgba(255,255,255,.5)',
		borderRadius: '10px',
		margin: '15px',
		height: '36vh',
		transition: 'all 200ms ease-in',
		transform: 'scale(1)',

		':hover': {
			background: 'rgba(255,255,255,1)',
			boxShadow: ' 0px 0px 20px rgba(0,0,0,.5)',
			zIndex: 2,
			transition: 'all 200ms ease-in',
			transform: 'scale(1.04)'
		}
	},
	title: {
		margin: '1em 0 0 ',
		'justify-content':'center',
		'font-size':'2em',
		'font-weight': '100',
	},
	listStyle: {
		'list-style':'none',
		display: 'flex',
		'justify-content':'center',
		margin:'2em 3em',
		padding: '0 3em'
	}
});
