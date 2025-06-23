import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function About() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "skyblue",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                }}
            >
                About
            </Text>
            <Link
                style={{
                    marginTop: 20,
                    padding: 10,
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: 5,
                }}
                href="/"
            >
                Go to Home
            </Link>
        </View>
    )
}