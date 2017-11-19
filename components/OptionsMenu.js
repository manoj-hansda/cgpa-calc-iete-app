import React from 'react';
import { Text, View, Picker } from 'react-native';
import { Separator } from 'native-base';
import { connect } from 'react-redux';

import * as actions from '../actions';

class OptionsMenu extends React.Component {
  render() {
    return (
      <View>
        <Separator>
            <Text>Select Course</Text>
        </Separator>
        <Picker 
          mode={'dropdown'} 
          selectedValue={this.props.level}
          onValueChange={(itemValue) => this.props.changeLevel(itemValue)}
        >
          <Picker.Item label="AMIETE" value='AMIETE' />
          <Picker.Item label="DipIETE" value='DipIETE' />
        </Picker>
        <Separator>
            <Text>Select Branch</Text>
        </Separator>
        <Picker 
          mode={'dropdown'} 
          selectedValue={this.props.branch}
          onValueChange={(itemValue) => this.props.changeBranch(itemValue)}
        >
          <Picker.Item label="ET" value='ET' />
          <Picker.Item label="CS" value='CS' />
          <Picker.Item label="IT" value='IT' />
        </Picker>
        <Separator>
            <Text>Select Scheme</Text>
        </Separator>
        <Picker 
          mode={'dropdown'}
          selectedValue={this.props.scheme}
          onValueChange={(itemValue) => this.props.changeScheme(itemValue)}
        >
          <Picker.Item label="Old Scheme" value="old" />
          <Picker.Item label="New Scheme" value="new" />
        </Picker>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  branch: state.viewState.branch,
  level: state.viewState.level,
  scheme: state.viewState.scheme
});

export default connect(mapStateToProps, actions)(OptionsMenu);
