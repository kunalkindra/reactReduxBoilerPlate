import React from "react";
import {shallow} from 'enzyme';
import {Route, Switch} from "react-router-dom";
import Routes from "./Routes";

describe('Routes', () => {
	it('should render home page as default route inside a switch', () => {
		const routes = shallow(<Routes/>);
		expect(routes.type()).toEqual(Switch);
		let homeRoute = routes.childAt(0);
		expect(homeRoute.type()).toEqual(Route);
		expect(homeRoute.prop('path')).toEqual('/');
		expect(homeRoute.prop('exact')).not.toBeDefined();
	});
});