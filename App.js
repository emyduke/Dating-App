import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import StackNavigator from './src/stackNavigator'
import { AuthProvider } from './src/useAuth'


export default function App() {

  return (
    <NavigationContainer>
      {/* HOC - Higer Order Component */}
      <AuthProvider>
        {/* Passes down the cool auth stuff to children... */}
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  )
}

