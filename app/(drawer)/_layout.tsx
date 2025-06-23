import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function DrawerRoot() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{ title: 'Home' }}
        />
        <Drawer.Screen
          name="about"
          options={{ title: 'About' }}
        />
        <Drawer.Screen
          name="profile"
          options={{ title: 'Profile' }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}