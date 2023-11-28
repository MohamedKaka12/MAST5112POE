// BookInput.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';

const BookInput = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [pages, setPages] = useState('');

  const handleSubmit = () => {
    onSubmit({ title, author, genre, pages });
    // Clear input fields
    setTitle('');
    setAuthor('');
    setGenre('');
    setPages('');
  };

  return (
    <View>
      <Text>Title:</Text>
      <TextInput value={title} onChangeText={setTitle} />

      <Text>Author:</Text>
      <TextInput value={author} onChangeText={setAuthor} />

      <Text>Genre:</Text>
      <Picker
        selectedValue={genre}
        onValueChange={(itemValue) => setGenre(itemValue)}
      >
        <Picker.Item label="Fantasy" value="Fantasy" />
        <Picker.Item label="Science Fiction" value="Science Fiction" />
        {/* Add more genres as needed */}
      </Picker>

      <Text>Number of Pages:</Text>
      <TextInput
        value={pages}
        onChangeText={(text) => setPages(text.replace(/[^0-9]/g, ''))}
        keyboardType="numeric"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default BookInput;
