import { combineReducers } from 'redux';
import InboxReducer from './reducer-inbox';
import ApplicantReducer from './reducer-applicants';
import listings from "./listingsReducer";
import headings from "./headingsReducer";
import rankings from "./rankingReducer";
import application from "./applicationReducer";
import userReducer from './userReducer'

export default combineReducers({
    rankings,
    listings,
    headings,
	inbox: InboxReducer,
	applicants: ApplicantReducer,
    application,
    user: userReducer
});
