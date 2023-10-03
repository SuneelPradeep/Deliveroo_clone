import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import client from '../sanity'

const FeaturedRow = ({id,title,description}) => {
 
  const [restaurants,setrestaurants] = useState([])
  useEffect(()=>{
  
    
      client.fetch(`*[_type == 'featured' && _id =='${id}']{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
            type-> {  name } }}[0]`).then((data)=> setrestaurants(data?.restaurants))
  },[ ])

  // console.log('the restaurant data is ',restaurants);

  return (
  <View >
     <View className='flex-row px-4 mt-4 justify-between  items-center'>
      <Text className='font-bold'> {title} </Text>
    <ArrowRightIcon size={20} color="#00CCBB" />
    </View>   
  
    <Text className='text-gray-500 text-xs px-4'> {description} </Text>
    <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 15}} showsHorizontalScrollIndicator={false}>
      
       {/* Restaurant Cards  */}
       {restaurants?.map((rest)=>(
        <RestaurantCard key={rest._id} id={rest._id} imgUrl={rest.image} address={rest.address} title={rest.name} 
        long={rest.Long} lat={rest.lat} rating={rest.rating}  genre={rest.type?.name} dishes={rest.dishes} short_desc={rest.short_description}  />
       ))}
        </ScrollView>
    </View>
  )
}

export default FeaturedRow