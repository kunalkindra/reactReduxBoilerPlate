import rootReducer from "./root";

describe('root reducer', () => {
	it('should return the initial state', () => {
		expect(rootReducer(undefined, {})).toEqual({app: []});
	});
});