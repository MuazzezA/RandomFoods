import React from 'react';
import AppStack from './src/app/navigation/app-stack';
import {SafeAreaView} from 'react-native';

import firebase from '@react-native-firebase/app';
import {firebaseConfig} from './src/app/config/firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#abbbaa'}}>
      <AppStack />
    </SafeAreaView>
  );
}
