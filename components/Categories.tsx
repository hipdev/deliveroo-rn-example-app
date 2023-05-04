import { ScrollView, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    // I'm not using the inline styles here

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {/* Horizontal View */}

      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Title' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Title' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Title' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Title' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Title' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Title' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Title' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Title' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Title' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='Title' />
    </ScrollView>
  )
}

export default Categories
