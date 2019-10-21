import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {AuthSwitchNav} from './components/navigation';

class Hrs extends Component {
  render() {
    return (<>

        <View style={styles.container}>
          <AuthSwitchNav/>
        </View>
      </>
    );
  }
}

export default Hrs;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
