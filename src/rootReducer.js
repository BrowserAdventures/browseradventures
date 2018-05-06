import {combineReducers} from 'redux';

import pictureBookReducer from './containers/PictureBook/store/reducers/pictureBookReducer'
import bookPageReducer from './containers/PictureBook/store/reducers/bookPageReducer'
import pokemonReducer from './containers/FlipBook/store/reducers/pokemonReducer'


const rootReducer = combineReducers({
    pictureBookReducer,
    bookPageReducer,
    pokemonReducer
})

export default rootReducer;
