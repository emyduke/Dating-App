import { View, Text } from 'react-native'
import React from 'react'

const HomeScreen = (props) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text onPress={()=>props.navigation.navigate("Chat")}>Go to chat</Text>
    </View>
  )
}

export default HomeScreen