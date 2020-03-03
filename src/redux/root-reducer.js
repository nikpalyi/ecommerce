import { combineReducers } from 'redux';

//caching storage, using local storage
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

//user is not in whiteList, because user is cared by Firebase to persist
const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
