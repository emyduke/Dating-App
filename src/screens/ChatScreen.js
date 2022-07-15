import { View, Text } from 'react-native'
import React from 'react'

const ChatScreen = (props) => {
  return (
    <View>
      <Text>ChatScreen</Text>
      <Text onPress={()=>props.navigation.navigate("Home")}>Go to Home</Text>
    </View>
  )
}

export default ChatScreen