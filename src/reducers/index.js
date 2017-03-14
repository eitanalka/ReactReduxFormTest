import { combineReducers } from 'redux';
import { combineForms } from 'react-redux-form';

const rootReducer = combineReducers({
  deep: combineForms({
    user: { firstName: '', lastName: ''}
  }, 'deep')
});

export default rootReducer;
