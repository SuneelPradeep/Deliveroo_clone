import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'
import { setRestaurant } from '../features/RestaurantSlice'
import { useDispatch } from 'react-redux'

const RestaurantCard = ({id, imgUrl,rating, title, genre, address,dishes,long, lat
,short_desc}) => {

 const navigation = useNavigation()

  const dispatch = useDispatch()

  return (
    // <TouchableOpacity onPress={()=> {navigation.navigate('Restaurant', {id, imgUrl,rating, title, genre, address,dishes,long, lat
    //   ,short_desc})}}
    <TouchableOpacity onPress={()=> {navigation.navigate('Restaurant');dispatch(setRestaurant({id, imgUrl,rating, title, genre, address,dishes,long, lat,short_desc}))}}
    className='bg-white shadow mr-3'>
      <Image source={{uri : urlFor(imgUrl).url() }} className='w-64 h-36 rounded-sm' />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2 '> {title} </Text>
        <View className='flex-row items-center space-x-1'>
          <StarIcon size={22} color='green' opacity={0.5} />
          <Text className='text-xs text-gray-500'> <Text>
            <Text className='text-green-500'> {rating}</Text> . {genre} </Text> </Text>
        </View>
        <View className='flex-row items-center'>
          <MapPinIcon size={22} color='gray' opacity={0.4} />
          <View>
            <Text className='text-gray-500 text-xs'> Nearby {address?.slice(0,10)} </Text>
            
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard