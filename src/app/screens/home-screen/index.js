import React from 'react';
import {Button, Text, View} from 'react-native';
import Foods from '../../config/foods';
import styles from './styles';

const getRandomCategory = () => {
  const categories = Object.keys(Foods);
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
};

const getRandomFood = categoryKey => {
  const specialFood = Foods[categoryKey];
  const randomIndex = Math.floor(Math.random() * specialFood.length);
  return specialFood[randomIndex];
};

export const HomeScreen = () => {
  const [food, setFood] = React.useState(' ');
  const [category, setCategory] = React.useState(' ');

  const onPressButton = () => {
    setFood(getRandomFood(category));
  };

  return (
    <View style={styles.container}>
      <Text>Hadi Sana Bir Öneri Verelim</Text>

      <Button title="Kebaplar" onPress={() => setCategory('Kebaplar')} />
      <Button title="Çorbalar" onPress={() => setCategory('Çorbalar')} />
      <Button title="Tatlılar" onPress={() => setCategory('Tatlılar')} />
      <Button title="AnaYemekler" onPress={() => setCategory('AnaYemekler')} />
      <Button
        title="Zeytinyağlı"
        onPress={() => setCategory('Zeytinyağlılar')}
      />

      <Button
        title="RASTEGELE KATEGORİ"
        onPress={() => setCategory(getRandomCategory())}
      />

      <Button title="GET FOOD" onPress={onPressButton} />
      <Text>Kategori</Text>
      <Text>{category}</Text>

      <Text style={styles.foodText}>{food}</Text>
    </View>
  );
};
