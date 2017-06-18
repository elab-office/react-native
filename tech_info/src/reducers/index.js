import { combineReducers } from 'redux';
import TechnologyReducer from './TechnologyReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: TechnologyReducer,
  selectedTechnologyId: SelectionReducer
});