import { combineReducers } from 'redux';
import InboxReducer from './reducer-inbox';
import listings from "./listingsReducer";

export default combineReducers({
	listings,
	inbox: InboxReducer
});