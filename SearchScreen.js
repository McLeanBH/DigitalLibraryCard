'use strict';

var React = require('react-native');
var {
  View,
  Text,
  TextInput,
  StyleSheet,
} = React;

var SearchScreen = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          DigitalLibraryCard
        </Text>
        <Text style={styles.label}>
          Find books containing:
        </Text>
        <TextInput
          placeholder="Search!"
          returnKeyType="search"
          enablesReturnKeyAutomatically={true}
          onEndEditing={ event => console.log(event.nativeEvent.text)}
          style={styles.textInput}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Math.random() > 0.5 ? '#5AC8FA' : '#FF692D',
  },
  headline: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 28,
  },
  label: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#fff',
    marginBottom: 8,
  },
  textInput: {
    borderColor: '#8e8e93',
    backgroundColor: '#fff',
    height: 40,
    borderWidth: 0.5,
    marginLeft: 60,
    marginRight: 60,
    padding: 8,
  },
});

module.exports = SearchScreen;
