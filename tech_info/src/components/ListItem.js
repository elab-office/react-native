import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import CardSection from './CardSection';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { data, expended} = this.props;
    const { descStyle } = styles;

    if (expended) {
      return (
        <CardSection>
          <Text style={ descStyle }>{ data.description }</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { data, selectTechnology } = this.props;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={() => selectTechnology(data.id)}>
        <View>
          <CardSection>
            <Text style={ titleStyle }>
              { data.title }
            </Text>
          </CardSection>
          { this.renderDescription() }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descStyle: {
    paddingLeft: 15,
    paddingRight: 15,
  }
};

const mapStateToProps = (state, ownProps) => {
  const expended = state.selectedTechnologyId === ownProps.data.id;
  return { expended };
};

export default connect(mapStateToProps, actions)(ListItem);