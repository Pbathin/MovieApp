import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.image?.medium }} style={styles.image} />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary}>{movie.summary.replace(/(<([^>]+)>)/gi, '')}</Text>
      {/* Additional Details */}
      <Text style={styles.details}>Language: {movie.language}</Text>
      <Text style={styles.details}>Genres: {movie.genres.join(', ')}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop:30,
    backgroundColor: '#141414',
  },
  image: {
    width: '90%',
    height: 350,
    marginBottom: 10,
    alignSelf:'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    textAlign:'justify'
  },
  details: {
    fontSize: 14,
    color: '#aaa',
  },
});

export default DetailsScreen;
