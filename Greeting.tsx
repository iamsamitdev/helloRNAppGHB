import { View, Text } from 'react-native'
import React from 'react'

export type Props = {
    name: string
    age?: number
}

const Greeting : React.FC<Props> = ({name="",age=0}) => {
    return (
    <View>
      <Text>Hello {name} Your age is {age}</Text>
    </View>
  )
}

export default Greeting