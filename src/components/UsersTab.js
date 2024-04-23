// components/UsersTab.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/usersActions';
import UserListItem from './UserListItem';
import SearchBar from './SearchBar';

export default function UsersTab() {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter(
    (user) =>
      user.login.toLowerCase().includes(searchText.toLowerCase()) ||
      user.id.toString().includes(searchText)
  );

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <FlatList
        data={filteredUsers}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => <UserListItem user={item} />}
        // Implement pagination here if needed
      />
    </View>
  );
}
