const CGPAreducer = (state = NaN, action) => {
  if (action.type === 'calculate_CGPA') {
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
    return CGPA;
  }

  return state;
};

export default CGPAreducer;
