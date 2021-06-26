import { combineReducers } from 'redux';
import reducer from './reducers/reducer';
import stateAppReducer from './reducers/stateAppReducer';


export default combineReducers({
    reducer,
    stateAppReducer
});
