import React from 'react';
import AppStack from './src/app/navigation/app-stack';
import {SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#abbbaa'}}>
      <AppStack />
    </SafeAreaView>
  );
}
