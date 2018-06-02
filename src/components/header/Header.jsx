import React from 'react';
import logo from './../../assets/images/logo-text_only_compressed.png';

export default function Header() {
	return <header className='header'>
		<div className="header__content container">
			<img src={logo} height='35' alt="KK" className="header__logo"/>
		</div>
	</header>;
}