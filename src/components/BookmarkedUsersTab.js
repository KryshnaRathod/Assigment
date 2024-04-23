// components/BookmarkedUsersTab.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import UserListItem from './UserListItem';

export default function BookmarkedUsersTab() {
  const bookmarkedUsers = useSelector((state) => state.users.bookmarkedUsers);

  return (
    <View>
      <FlatList
        data={bookmarkedUsers}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => <UserListItem user={item} />}
      />
    </View>
  );
}
