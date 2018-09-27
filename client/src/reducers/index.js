import { combineReducers } from 'redux';

import { authentication } from './authentication';
import { alert } from './alert';
import { beers } from './beers';

const rootReducer = combineReducers({
  authentication,
  alert,
  beers
});

export default rootReducer;