import { combineReducers } from 'redux';
import cardsReducer from '../components/cardsList/reducers/cardlistReducer';

const rootReducer = combineReducers({
    card_list: cardsReducer,
});

export default rootReducer;