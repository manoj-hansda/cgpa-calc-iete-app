const INITIAL_STATE = {
  grades: {},
  CGPA: null
};

const DataState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'modify_grades':
      return {
        ...state,
        grades: { ...state.grades, [action.payload.subject]: action.payload.grade }
      };
    
    case 'calculate_CGPA':
      const grades = action.payload;
      let num = 0;
      let den = 0;
      Object.keys(grades).forEach(subject => {
        let credit = 4;
        if (grades[subject]) {
          if (subject === 'Project Work' || subject === 'Seminar') {
              credit = 8;
          }
          num += grades[subject] * credit;
          den += credit;
        }
      });
      const CGPA = Math.round((num / den) * 100) / 100;
      return { ...state, CGPA };

    default:
      return state;
  }
};

export default DataState;
