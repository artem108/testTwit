import { combineReducers } from 'redux';
import twits from './modules/twits';
import users from './modules/users';

export default combineReducers({
 users,
 twits
});
