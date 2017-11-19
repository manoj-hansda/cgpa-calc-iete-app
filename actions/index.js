export const changeBranch = branch => ({
  type: 'change_branch',
  payload: branch
});

export const changeLevel = level => ({
  type: 'change_level',
  payload: level
});

export const changeScheme = scheme => ({
  type: 'change_scheme',
  payload: scheme
});

export const modifyGrades = (subject, grade) => ({
  type: 'modify_grades',
  payload: {
    subject,
    grade
  }
});

export const calculateCGPA = grades => ({
  type: 'calculate_CGPA',
  payload: grades
});
