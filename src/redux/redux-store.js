import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profile.reducer';
import dialogsReducer from './dialogs.reducer';
import sidebarReducer from './sidebar.reducer';
import usersReducer from './users.reducer';
import authReducer from './auth.reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
  // composeEnhancer(applyMiddleware(thunkMiddleware))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
window.store = store;

export default store;
