import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native' 
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { ArrowLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import DishRow from '../Components/DishRow'
import BasketTotal from '../Components/BasketTotal'
import { useDispatch, useSelector } from 'react-redux'
import { selectedRestaurants, setRestaurant } from '../features/RestaurantSlice'

const Restaurant = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()
  
  const restaurant = useSelector(selectedRestaurants)
  // const {params : {id, imgUrl,rating, title, genre, address,dishes,long, lat
  //   ,short_desc}} = useRoute()

    console.log('the restaurant',restaurant);
 const {id, imgUrl,rating, title, genre, address,dishes,long, lat,short_desc} = restaurant
 
 useLayoutEffect(()=>{
  navigation.setOptions({
    headerShown : false
  })
 },[])

//  useEffect(()=>{
//   dispatch(setRestaurant({id, imgUrl,rating, title, genre, address,dishes,long, lat
// ,short_desc}))

//  },[id])

 
  return (
    <>
    <ScrollView>
      <Image source={{uri : urlFor(imgUrl).url() }} className='w-full h-56 bg-gray-300 p-4 ' />
    <TouchableOpacity onPress={navigation.goBack}
     className='absolute top-14 left-5 bg-gray-100 p-1 rounded-full'>
      <ArrowLeftIcon size={20} color='#00CCBB' />
    </TouchableOpacity>
    <View className='pt-2 px-4 bg-white'>
      <Text className='text-3xl font-bold'> {title} </Text>
      <View className='flex-row items-center space-x-2 mt-1 '>
        <StarIcon color='green' size={22} opacity={0.5} />
        <Text className='text-xs text-gray-500'>{rating}</Text>
        <Text className='text-gray-500'>{genre} </Text>
        <MapPinIcon size={22} opacity={0.5} color='green' />
        <Text className='text-gray-500'>Nearby . {address} </Text>
      </View >
      <Text className='text-gray-500 pb-4 mt-2'>{short_desc} </Text>
      
      <TouchableOpacity className='flex-row items-center space-x-2  p-4 border-y border-gray-300'>
        <QuestionMarkCircleIcon size={20} opacity={0.5} color='gray' />
        <Text className='pl-2 flex-1 text-md font-bold'> Have a food Allergy ?</Text>
        <ChevronRightIcon color='#00CCBB' />
      </TouchableOpacity>
    </View>

 <View className='pb-36'>
  <Text className='font-bold pt-6 px-4 text-xl mb-3'> Menu</Text>
  {dishes.map((dish)=>(
    <DishRow key={dish._id} description={dish.short_description} id={dish._id} price={dish.price} image={dish.image} name={dish.name}    />
  ))}
 </View>


    </ScrollView> 

    <BasketTotal />
    </>
  )
}

export default Restaurant