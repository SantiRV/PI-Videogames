import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';
import tryCatch from '../../middlewares/tryCatch';

function errorHandler(error) {
    console.log(error);
};

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(tryCatch(errorHandler), thunk))
);