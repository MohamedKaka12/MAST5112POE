// GenreScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const GenreScreen = ({ genreCounts }) => {
  return (
    <View>
      <Text>Genre Counts:</Text>
      {Object.entries(genreCounts).map(([genre, count]) => (
        <Text key={genre}>
          {genre}: {count}
        </Text>
      ))}
    </View>
  );
};

export default GenreScreen;
