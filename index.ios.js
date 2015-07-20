'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var SearchScreen = require('./SearchScreen');

var DigitalLibraryCard = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: SearchScreen,
          title: 'Search',
        }}
      style={styles.container}
      />
    );
  }
});

var styles = StyleSheet.create({
  navContainer: {
    flex: 1,
  },
});

AppRegistry.registerComponent('DigitalLibraryCard', () => DigitalLibraryCard);
