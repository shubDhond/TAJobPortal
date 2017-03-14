import { combineReducers } from 'redux';
import InboxReducer from './reducer-inbox';


export default combineReducers({
	inbox: InboxReducer
});