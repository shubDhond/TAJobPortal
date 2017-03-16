import { combineReducers } from 'redux';
import InboxReducer from './reducer-inbox';
import listings from "./listingsReducer";
import application from "./applicationReducer";

export default combineReducers({
    listings,
    application,
	inbox: InboxReducer
});