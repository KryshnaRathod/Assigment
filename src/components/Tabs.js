// components/Tabs.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UsersTab from './UsersTab';
import BookmarkedUsersTab from './BookmarkedUsersTab';

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Users" component={UsersTab} />
      <Tab.Screen name="Bookmarked Users" component={BookmarkedUsersTab} />
    </Tab.Navigator>
  );
}
