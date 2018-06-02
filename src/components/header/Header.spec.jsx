import React from "react";
import {shallow} from 'enzyme';
import Header from "./Header";
import logo from './../../assets/images/logo-text_only_compressed.png';

describe('Header', () => {
	it('should logo', () => {
		const header = shallow(<Header/>),
			pageTitle = header.find('.header__logo');
		expect(pageTitle.prop('src')).toEqual(logo);
	});
});