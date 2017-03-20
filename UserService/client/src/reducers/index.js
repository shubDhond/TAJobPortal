import { combineReducers } from 'redux';
import InboxReducer from './reducer-inbox';
import ApplicantReducer from './reducer-applicants';
import listings from "./listingsReducer";
import application from "./applicationReducer";

export default combineReducers({
	listings,
	inbox: InboxReducer,
	applicants: ApplicantReducer,
    application
});