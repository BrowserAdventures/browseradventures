import {combineReducers} from 'redux';

import pictureBookReducer from './containers/PictureBook/store/reducers/pictureBookReducer'
import bookPageReducer from './containers/PictureBook/store/reducers/bookPageReducer'
import flashCardsReducer from './containers/FlashCards/store/reducers/flashCardsReducer'
import weatherMapReducer from './containers/WeatherMap/store/reducers/weatherMapReducer'
import homePageReducer from './containers/Home/store/reducers/homePageReducer'


const rootReducer = combineReducers({
    pictureBookReducer,
    bookPageReducer,
    flashCardsReducer,
    weatherMapReducer,
    homePageReducer,
})

export default rootReducer;
