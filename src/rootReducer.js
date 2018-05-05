import {combineReducers} from 'redux';

import pictureBookReducer from './containers/PictureBook/store/reducers/pictureBookReducer'
import bookPageReducer from './containers/PictureBook/store/reducers/bookPageReducer'
import weatherMapReducer from './containers/WeatherMap/store/reducers/weatherMapReducer'


const rootReducer = combineReducers({
    pictureBookReducer,
    bookPageReducer,
    weatherMapReducer,
})

export default rootReducer;
