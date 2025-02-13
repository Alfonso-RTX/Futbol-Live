import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

const categories = [
  { title: '📺 En Vivo', image: require('../assets/live-matches.png'), color: '#FF4C4C' },
  { title: '⏳ Próximos', image: require('../assets/upcoming-matches.jpeg'), color: '#FFA500' },
  { title: '📊 Resultados', image: require('../assets/results.jpg'), color: '#4CAF50' },
  { title: '📰 Noticias', image: require('../assets/news.png'), color: '#1E88E5' },
];

export const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>⚽ FutbolLive</Text>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={[styles.card, { backgroundColor: category.color }]}> 
          <ImageBackground source={category.image} style={styles.image}>
            <Text style={styles.cardText}>{category.title}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ))}
      <View style={styles.footer}>
        <Text style={styles.footerItem}>🏠 Inicio</Text>
        <Text style={styles.footerItem}>⚙️ Configuración</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  card: {
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#222',
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerItem: {
    fontSize: 18,
    color: 'white',
  },
});
