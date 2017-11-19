import { combineReducers } from 'redux';

import ViewState from './ViewState';
import GradesReducer from './GradesReducer';
import CGPAreducer from './CGPAreducer';

export default combineReducers({
    viewState: ViewState,
    grades: GradesReducer,
    CGPA: CGPAreducer
});
