// components/UserListItem.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleBookmark } from '../actions/usersActions';

export default function UserListItem({ user }) {
  const dispatch = useDispatch();

  const handleBookmarkToggle = () => {
    dispatch(toggleBookmark(user.id));
  };

  return (
    <TouchableOpacity onPress={handleBookmarkToggle}>
      <View style={styles.container}>
        <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
        <Text>{user.login}</Text>
        {/* Add more user details here if needed */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});
