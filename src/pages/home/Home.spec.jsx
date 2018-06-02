import React from "react";
import {shallow} from 'enzyme';
import Home from "./Home";

describe('Home page', () => {
	it('should render page title', () => {
		const homePage = shallow(<Home/>),
			pageTitle = homePage.find('.pageTitle');
		expect(pageTitle.text()).toEqual('Home');
	});
});