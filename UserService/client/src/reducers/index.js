import { combineReducers } from 'redux';

import listings from "./listingsReducer";
import application from "./applicationReducer";

export default combineReducers({
    listings,
    application,
});