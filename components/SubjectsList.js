import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Body, Separator, Card, CardItem } from 'native-base';
import { connect } from 'react-redux';


import GradesPanel from './GradesPanel';

const Subject = props => {
  const subjectName = props.subject.name ||
                      props.subject[`name_${props.branch}`] ||
                      props.subject.name_EC ||
                      props.subject.name_CI ||
                      props.subject.name_EI;
                      
  return (
    <Card>
      <CardItem>
        <Body>
          <Text>
            {props.prefix}-{ props.subject.code } : { subjectName }
          </Text>
          <GradesPanel subject={subjectName} />
        </Body>
      </CardItem>
    </Card>
  );
};

const Section = props => (
  <View>
    <View>
      <Separator bordered>
        <Text style={{ fontSize: 16, color: '#8B8280' }}>{ props.sectionName }</Text>
      </Separator>
    </View>
    <View>
      <FlatList
        data={props.Subjects[props.sectionName]}
        renderItem={({ item }) => <Subject subject={item} branch={props.branch} prefix={props.prefix} />}
        keyExtractor={item => item.code}
        extraData={props.prefix}
      />
    </View>
  </View>
);

class SubjectsList extends React.Component {
  renderSections() {
    const { subjects, branch, prefix } = this.props;
    return Object.keys(subjects).map((sectionName, index) => (
        <Section Subjects={subjects} sectionName={sectionName} branch={branch} prefix={prefix} key={index} />
      )
    );
  }
  
  render() {
    return (
        <View>
          { this.renderSections() }
        </View>
    );
  }
}

const mapStateToProps = state => ({ 
  subjects: state.viewState.subjects,
  branch: state.viewState.branch,
  prefix: state.viewState.prefix
 });

export default connect(mapStateToProps)(SubjectsList);
