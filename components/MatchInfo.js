// components/MatchInfo.js - Componente de Información de Partidos
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';

// Configuración de API
const API_URL = 'https://api.football-data.org/v2/matches';

export const MatchInfo = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetchMatches();
  }, []);

  // Función para obtener partidos
  const fetchMatches = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMatches(data.matches);
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  };

  return (
    <ImageBackground source={require('../assets/grass.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Partidos de Fútbol</Text>
        <FlatList 
          data={matches}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.matchContainer}>
              <Text style={styles.matchText}>{item.homeTeam.name} vs {item.awayTeam.name}</Text>
              <Text style={styles.matchText}>Fecha: {new Date(item.utcDate).toLocaleString()}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

// Estilos de la aplicación
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 128, 0, 0.5)', // Verde con opacidad
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  matchContainer: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  matchText: {
    fontSize: 18,
    textAlign: 'center',
  }
});


