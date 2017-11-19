import subjectsAMold from '../assets/subjectsAMold.json';
import subjectsAMnew from '../assets/subjectsAMnew.json';
import subjectsDIPold from '../assets/subjectsDIPold.json';
import subjectsDIPnew from '../assets/subjectsDIPnew.json';

const INITIAL_STATE = {
  branch: 'ET',
  level: 'AMIETE',
  scheme: 'old',
  prefix: 'AE',
  subjects: subjectsAMold
};

const ViewState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'change_branch':
      if (action.payload === 'ET') {
        return {
          ...state,
          branch: action.payload,
          prefix: (state.level === 'AMIETE') ? 'AE' : 'DE'
        };
      } else if (action.payload === 'CS') {
        return {
          ...state,
          branch: action.payload,
          prefix: (state.level === 'AMIETE') ? 'AC' : 'DC'
        };
      }
      return {
        ...state,
        branch: (state.level === 'AMIETE') ? action.payload : state.branch,
        prefix: (state.level === 'AMIETE') ? 'AT' : state.prefix
      };

    case 'change_level':
      if (state.branch === 'IT') {
        return state;
      } else if (action.payload === 'AMIETE') {
        return {
          ...state,
          level: action.payload,
          prefix: (state.branch === 'ET') ? 'AE' : 'AC',
          subjects: (state.scheme === 'old') ? subjectsAMold : subjectsAMnew
        };
      }
      return {
        ...state,
        level: action.payload,
        prefix: (state.branch === 'ET') ? 'DE' : 'DC',
        subjects: (state.scheme === 'old') ? subjectsDIPold : subjectsDIPnew
      };

    case 'change_scheme':
      if (action.payload === 'old') {
        return {
          ...state,
          scheme: action.payload,
          subjects: (state.level === 'AMIETE') ? subjectsAMold : subjectsDIPold
        };
      }
      return {
        ...state,
        scheme: action.payload,
        subjects: (state.level === 'AMIETE') ? subjectsAMnew : subjectsDIPnew
      };

    default:
      return state;
  }
};

export default ViewState;
