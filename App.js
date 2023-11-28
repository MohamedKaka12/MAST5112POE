// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookInput from './BookInput';
import HomeScreen from './HomeScreen';
import HistoryScreen from './HistoryScreen';
import GenreScreen from './GenreScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [books, setBooks] = useState([]);
  const lastBook = books.length > 0 ? books[books.length - 1] : {};
  const totalPages = books.reduce((total, book) => total + parseInt(book.pages), 0);
  const averagePages = books.length > 0 ? totalPages / books.length : 0;

  const handleBookSubmit = (book) => {
    setBooks([...books, book]);
  };

  const getLastThreeBooks = () => {
    const start = Math.max(0, books.length - 3);
    return books.slice(start);
  };

  const getGenreCounts = () => {
    const counts = {};
    books.forEach((book) => {
      counts[book.genre] = (counts[book.genre] || 0) + 1;
    });
    return counts;
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          options={{ title: 'Home' }}
          children={() => <HomeScreen lastBook={lastBook} totalPages={totalPages} averagePages={averagePages} />}
        />
        <Tab.Screen
          name="History"
          options={{ title: 'History' }}
          children={() => <HistoryScreen history={getLastThreeBooks()} />}
        />
        <Tab.Screen
          name="Genre"
          options={{ title: 'Genre' }}
          children={() => <GenreScreen genreCounts={getGenreCounts()} />}
        />
        <Tab.Screen
          name="AddBook"
          options={{ title: 'Add Book' }}
          children={() => <BookInput onSubmit={handleBookSubmit} />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
