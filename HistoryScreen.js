// HistoryScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const HistoryScreen = ({ history }) => {
  return (
    <View>
      <Text>History:</Text>
      {history.map((book, index) => (
        <View key={index}>
          <Text>{book.title}</Text>
          <Text>{book.author}</Text>
          <Text>{book.genre}</Text>
          <Text>{book.pages} pages</Text>
        </View>
      ))}
    </View>
  );
};

export default HistoryScreen;
