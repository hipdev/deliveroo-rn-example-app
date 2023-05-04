import { View, Text } from 'react-native'
import React from 'react'

type Props = {
  id: string
  title: string
  description: string
  featuredCategory: string
}

const FeaturedRow = ({ id, title, description, featuredCategory }: Props) => {
  return (
    <View>
      <Text>FeaturedRow</Text>
    </View>
  )
}

export default FeaturedRow
