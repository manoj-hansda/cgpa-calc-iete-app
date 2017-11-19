import React, { Component } from 'react';
import { Text, View, Modal, StyleSheet, ToastAndroid } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';

import { calculateCGPA } from '../actions';

class CalcButton extends Component {
  state = {
    modalVisible: false
  }
  
  calculateAndShow = () => {
    this.props.calcCGPA(this.props.grades);
    setTimeout(() => {
      if(!isNaN(this.props.CGPA && this.props.CGPA !== 0)) {
        this.setState({ modalVisible: true });
      } else {
        ToastAndroid.show('Select at least one subject !', ToastAndroid.SHORT);
      }
    }, 100)
  }

  render() {
    return (
      <View>
        <Button
          small
          style={styles.button}
          onPress={this.calculateAndShow}
        >
          <Text style={styles.buttonText}>CALCULATE</Text>
        </Button>
        <Modal
          transparent
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={() => this.setState({ modalVisible: false })}
        >
          <View style={styles.modalContent}>
              <Text style={styles.CGPA}>
                CGPA : {this.props.CGPA}
                {(this.props.CGPA) ? ` (${this.props.CGPA * 9.5}%)` : '' }
              </Text>
              <Button
                info
                small
                onPress={() => this.setState({ modalVisible: false })} 
                style={styles.close}
              >
                <Text>Close</Text>
              </Button>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  grades: state.grades,
  CGPA: state.CGPA
});

const mapDispatchToProps = dispatch => ({
  calcCGPA(grades) {
      dispatch(calculateCGPA(grades));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CalcButton);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9bdabf',
  },
  buttonText: {
    color: 'teal',
    fontWeight: 'bold'
  },
  modalContent: {
    height: 110,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'teal',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    top: '40%',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 1,
  },
  close: {
    justifyContent: 'center',
  },
  CGPA: {
    color: 'white',
    fontSize: 25,
    marginBottom: 10,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 1,
  }
});
