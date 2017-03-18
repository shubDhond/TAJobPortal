import { combineReducers } from 'redux';
import InboxReducer from './reducer-inbox';
import listings from "./listingsReducer";
import jobView from "./jobViewReducer";
import rankings from "./rankingReducer";

export default combineReducers({
    rankings,
    listings,
    jobView,
	inbox: InboxReducer,
});