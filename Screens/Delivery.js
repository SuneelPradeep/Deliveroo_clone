import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useSelector } from 'react-redux'
import { selectedRestaurants } from '../features/RestaurantSlice'
import MapView, { Marker  } from 'react-native-maps'
const Delivery = () => {
    const restaurant = useSelector(selectedRestaurants)
     const navigation = useNavigation()
console.log('the restaurant is',restaurant);

  return (

    <View className='flex-1 bg-[#00CCBB]'>

    <SafeAreaView className='z-50 '>
        <View className='flex-row justify-between p-5 items-center'>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}><XMarkIcon  size={30} color='white' /></TouchableOpacity>
      <Text className='text-white text-lg font-light'>Order Help </Text>
      </View>
    
    <View className='bg-white mx-5 my-2 rounded-md z-50 shadow-md p-6 '>
        <View className='flex-row'>
           <View className='flex-column space-y-1'>
            <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
            <Text className='text-4xl font-bold'>45-55 Minutes </Text>
        </View>
       <View className='pr-10'>
       <Animatable.Image source={require('../assets/deliver.gif')} className='h-20 w-20' iterationCount={1} />
    </View> 
    </View>
    <Progress.Bar color='#00CCBB' size={30} indeterminate={true} />
    <Text> Your order at {restaurant[0]?.title} is being prepared</Text>
    </View>
    </SafeAreaView>

 <MapView initialRegion={{
    latitude : restaurant[0]? restaurant[0].lat : 14.234,
    longitude : restaurant[0]? restaurant[0].long : 16.234,
    latitudeDelta: 0.005,longitudeDelta  :0.005
 }}
  mapType='mutedStandard' className='flex-1 mt-13 z-0 '
 >
     <Marker coordinate={{ latitude : restaurant[0]? restaurant[0].lat : 14.234,
    longitude : restaurant[0]? restaurant[0].long : 16.234 }}
    pinColor='#00CCBB' identifier='origin' title={restaurant[0]? restaurant[0]?.title : 'Restaurant'} description={restaurant[0]? restaurant[0]?.short_desc : "a restaurant" } />
 </MapView>

   <SafeAreaView className='bg-white flex-row space-x-5 items-center h-15 pb-3'>
    <Image source={{uri : 'https://links.papareact.com/wru'}} className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5' />
    <View className='flex-1'>
       <Text className='text-lg'>Suneel Pradeep</Text>
    <Text className='text-gray-400'> Your Rider</Text>
    </View>
    <Text className='text-[#00CCBB] text-lg mr-5 font-bold'> Call</Text>
   </SafeAreaView>
    </View>
  )
}

export default Delivery