import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {firebase} from '@react-native-firebase/database';
import {firebaseConfig} from '../../config/firebase';
import styles from './styles';

export const HomeScreen = () => {
  const [data, setData] = React.useState('');
  const [categoryKeys, setCategoryKeys] = React.useState([]);

  const getFirebaseData = () => {
    const reference = firebase
      .app()
      .database(firebaseConfig.databaseURL)
      .ref('/foods');

    reference.on('value', snapshot => {
      setData(snapshot.val());
      setCategoryKeys(Object.keys(snapshot.val()));
    });
  };

  useEffect(() => {
    getFirebaseData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(data[categoryKeys[0]])}</Text>
      <Text>{JSON.stringify(categoryKeys)}</Text>
    </View>
  );
};
