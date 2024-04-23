// components/SearchBar.js
import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function SearchBar({ searchText, setSearchText }) {
  const [typingTimeout, setTypingTimeout] = useState(0);

  const handleSearch = (text) => {
    clearTimeout(typingTimeout);
    const timeout = setTimeout(() => setSearchText(text), 300);
    setTypingTimeout(timeout);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder="Search..."
      onChangeText={handleSearch}
      value={searchText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
