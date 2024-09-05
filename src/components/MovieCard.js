import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieCard = ({ movie }) => (
  <View style={styles.card}>
    <Image source={{ uri: movie.image?.medium }} style={styles.thumbnail} />
    <View style={styles.info}>
      <Text style={styles.title}>{movie.name}</Text>
      <Text numberOfLines={2} style={styles.summary}>{movie.summary.replace(/(<([^>]+)>)/gi, '')}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#222',
    borderRadius: 5,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  info: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  summary: {
    fontSize: 14,
    color: '#aaa',
  },
});

export default MovieCard;
