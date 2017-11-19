const GradesReducer = (state = {}, action) => {
  if (action.type === 'modify_grades') {
    return {
      ...state,
      [action.payload.subject]: action.payload.grade
    };
  }

  return state;
};

export default GradesReducer;
