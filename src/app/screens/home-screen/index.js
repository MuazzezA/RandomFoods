import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {firebase} from '@react-native-firebase/database';
import {firebaseConfig} from '../../config/firebase';
import {Header, Button, LoadingData} from '../../components';
import styles from './styles';

export const HomeScreen = () => {
  const [data, setData] = React.useState('');
  const [categoryKeys, setCategoryKeys] = React.useState([]);
  const [error, setError] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [selectedFood, setSelectedFood] = React.useState(null);

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

  const getRandomCategory = () => {
    const randomIndex = Math.floor(Math.random() * categoryKeys.length);
    setSelectedCategory(categoryKeys[randomIndex]);
  };

  const getRandomFood = (isAll = false) => {
    if (isAll) {
      getRandomCategory();
    }

    if (selectedCategory) {
      const specialFood = data[selectedCategory];
      const randomIndex = Math.floor(Math.random() * specialFood.data.length);

      setError('');
      setSelectedFood({
        food: specialFood.data[randomIndex],
        type: specialFood.name,
      });
    } else {
      setError('Lütfen önce kategori seçiniz.');
    }
  };

  useEffect(() => {
    getFirebaseData();
  }, []);

  return (
    <View style={styles.root}>
      <Header title={'Anasayfa'} />

      {data ? (
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Seçilen Kategori :{' '}
              <Text style={styles.foodText}>
                {data[selectedCategory]?.name}
              </Text>
            </Text>
            <Text style={styles.text}>
              Yemeğiniz :{' '}
              <Text style={styles.foodText}>{selectedFood?.food}</Text>
            </Text>
            <Text style={styles.error}>{error}</Text>
          </View>
          <View style={styles.listContainer}>
            {categoryKeys.map((item, index) => {
              return (
                <Button
                  key={index}
                  preset={'secondary'}
                  title={data[categoryKeys[index]].name}
                  onPress={() => setSelectedCategory(categoryKeys[index])}
                />
              );
            })}
          </View>
          <Button
            title="Rastgele Kategori"
            onPress={() => getRandomCategory()}
          />
          <Button
            title="Tamamen Rastgele"
            onPress={() => getRandomFood({isAll: true})}
          />
          <Button title="Üret" onPress={() => getRandomFood()} />
        </ScrollView>
      ) : (
        <LoadingData />
      )}
    </View>
  );
};
