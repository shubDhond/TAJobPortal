import { combineReducers } from 'redux';
import InboxReducer from './reducer-inbox';
import listings from "./listingsReducer";
import headings from "./headingsReducer";
import rankings from "./rankingReducer";

export default combineReducers({
    rankings,
    listings,
    headings,
	inbox: InboxReducer,
});