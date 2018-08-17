import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import Splash from './src/components/Splash';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Route path="/" component={Splash} />
        </View>
      </NativeRouter>
    );
  }
}
