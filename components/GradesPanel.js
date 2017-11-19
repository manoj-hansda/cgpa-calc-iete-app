import React from 'react';
import { Body } from 'native-base';
import { SegmentedControls } from 'react-native-radio-buttons';
import { connect } from 'react-redux';

import { modifyGrades } from '../actions';

const grades = [
  { label: 'A+', value: 10 },
  { label: 'A' , value: 9  },
  { label: 'B+', value: 8  },
  { label: 'B' , value: 7  },
  { label: 'C+', value: 6  },
  { label: 'C' , value: 5  },
  { label: 'D' , value: 4  }
];

class GradesPanel extends React.Component {
  testOptionEqual = (selectedValue, option) => selectedValue === option.value;
  
  modifyGrades = opt => {
    const grade = (opt.value === this.props.grades[this.props.subject]) ? 0 : opt.value;
    this.props.setGrades(this.props.subject, grade);
  }
  
  render() {   
    return (
      <Body>
        <SegmentedControls
          options={grades}
          onSelection={this.modifyGrades}
          selectedOption={this.props.grades[this.props.subject]}
          extractText={(option) => option.label}
          testOptionEqual={this.testOptionEqual}
          containerStyle={{ marginTop: 10 }}
          containerBorderRadius={0}
        />
      </Body>
    );
  }
}

const mapStateToProps = state => ({
  grades: state.grades
});

const mapDispatchToProps = dispatch => ({
  setGrades(subject, grade) {
      dispatch(modifyGrades(subject, grade));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GradesPanel);
