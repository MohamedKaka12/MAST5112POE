// HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = ({ lastBook, totalPages, averagePages }) => {
  return (
    <View>
      <Text>Last Book:</Text>
      <Text>{lastBook.title}</Text>
      <Text>{lastBook.author}</Text>
      <Text>{lastBook.genre}</Text>
      <Text>{lastBook.pages} pages</Text>

      <Text>Total Pages Read: {totalPages}</Text>
      <Text>Average Pages: {averagePages}</Text>
    </View>
  );
};

export default HomeScreen;
