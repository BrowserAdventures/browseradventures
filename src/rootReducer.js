import {combineReducers} from 'redux';

import pictureBookReducer from './containers/PictureBook/store/reducers/pictureBookReducer'
import bookPageReducer from './containers/PictureBook/store/reducers/bookPageReducer'
import flashCardsReducer from './containers/FlashCards/store/reducers/flashCardsReducer'


const rootReducer = combineReducers({
    pictureBookReducer,
    bookPageReducer,
    flashCardsReducer
})

export default rootReducer;
