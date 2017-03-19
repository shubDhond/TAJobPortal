import { combineReducers } from 'redux';
import InboxReducer from './reducer-inbox';
import ApplicantReducer from './reducer-applicants';
import listings from "./listingsReducer";

export default combineReducers({
	listings,
	inbox: InboxReducer,
	applicants: ApplicantReducer
});