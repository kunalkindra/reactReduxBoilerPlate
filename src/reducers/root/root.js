import {persistCombineReducers} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import app from "../app/app";

const rootReducer = {
	app
};

const persistConfig = {key: 'root', storage};

const persistedReducer = persistCombineReducers(persistConfig, rootReducer);

export default persistedReducer;

