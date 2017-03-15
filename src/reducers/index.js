import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { combineForms } from 'react-redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: combineForms({
    form: { title: '', categories: '', content: ''}
  }, 'form')
});

export default rootReducer;
