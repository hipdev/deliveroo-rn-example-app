import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

type Props = {
  title?: string
  imgUrl: string
}

const CategoryCard = ({ title, imgUrl }: Props) => {
  return (
    <TouchableOpacity className='relative mr-3'>
      <Image source={{ uri: imgUrl }} className='h-20 w-20 rounded-md' />
      <Text className='absolute bottom-1 left-1 text-xs font-bold text-white'>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard
