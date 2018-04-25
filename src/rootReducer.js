import {combineReducers} from 'redux';

import pictureBookReducer from './containers/PictureBook/store/reducers/pictureBookReducer'

const rootReducer = combineReducers({
    pictureBookReducer
})

export default rootReducer;
