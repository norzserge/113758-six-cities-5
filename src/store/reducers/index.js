import {combineReducers} from 'redux';
import {stateReducer} from './state-reducer';
import {dataReducer} from './data-reducer';

export const nameSpace = {
  STATE: `STATE`,
  DATA: `DATA`,
};

export default combineReducers({
  [nameSpace.STATE]: stateReducer,
  [nameSpace.DATA]: dataReducer,
});
