import {ActionType} from '../action';
import {extend} from '../../utils';

const initialState = {
  dataFromServer: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DATA_FROM_SERVER:
      return extend(state, {
        dataFromServer: action.payload,
      });
  }

  return state;
};

export {dataReducer};
