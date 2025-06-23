import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import { View } from 'react-native'

export default function TabRoot() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => {
            return (
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: 'white',
                  borderColor: color,
                  borderWidth: 2,
                  bottom: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FontAwesome size={28} name="info" color={color} />
              </View>
            )
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  )
}