import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { selectedRestaurants, setRestaurant } from '../features/RestaurantSlice'
import { ItemsTotal, removefromBasket, selectedItems } from '../features/BasketSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'

const Basket = () => {

     const restaurant = useSelector(selectedRestaurants)
    //  console.log('the restaurant is',restaurant[0].title);
     const navigation = useNavigation()
     const BasketTotal = useSelector(ItemsTotal)
     const dispatch = useDispatch()
     const items = useSelector(selectedItems)
 const [groupItems, setgroupItems] = useState([])
  
 useEffect(()=>{
      const groupItemsss = items.reduce((results,item)=> {
         (results[item.id] = results[item.id] || []).push(item);
      return results; 
  },{})
    setgroupItems(groupItemsss)   
  },[items])

  // console.log('the grpup items ', groupItems[0],groupItems.length);

  return (
    <SafeAreaView className='flex-1 bg-white' >
      <View className='flex-1 bg-gray-100' >
        <View className='p-3 mb-4 border-b items-center border-[#00CCBB] bg-white shadow-xs'>
        <View>
            <Text className=' text-lg font-bold text-center'> Basket</Text>
            <Text className='text-center text-gray-400'> {restaurant[0]?.title} </Text> 
      </View>
      <TouchableOpacity onPress={navigation.goBack} className='rounded-full bg-gray-100 absolute top-3 right-5'>
            <XCircleIcon size={40} color='#00BBCC' />
              </TouchableOpacity>
       </View>
      <View>
      </View>
    

    <View className='flex-row space-x-2 items-center bg-white p-3'>
    <Image source={{uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450'}}
            className='h-7 w-7 rounded-full bg-gray-300 p-4'  
            />
       <Text className='flex-1'> Deliver in 50-75mins</Text>
       <Text className='text-[#00CCBB]'> Change </Text>
  </View> 

  <ScrollView className='divide-y divide-gray-200'>
    {Object.entries(groupItems).map(([key,items])=> (
     <View key={key} className='flex-row space-x-4 items-center py-3 px-5'>
     <Text className='text-[#00CCBB]'>{items.length} x</Text>
     <Image source={{uri: urlFor(items[0]?.image).url() }} className='w-12 h-12 rounded-full' />
       <Text className='flex-1'>{items[0]?.name }</Text>
       <Text className='text-gray-600'> ${items[0]?.price}</Text>
       <TouchableOpacity onPress={()=> dispatch(removefromBasket({id : key}))}>
       <Text className='text-xs text-[#00CCBB]'> Remove </Text>
        </TouchableOpacity>
        
   </View>
    )
)}
    </ScrollView>  
      
      <View className='bg-white mt-5 p-5 space-y-2'>
        <View className='flex-row justify-between '>
      <Text className=' text-gray-400'>Subtotal</Text>
      <Text className=' text-gray-400'> ${BasketTotal}</Text>
      
    
      </View>
      <View className='flex-row justify-between'>
      <Text className=' text-gray-400' >Delivery Fee</Text>
      <Text className=' text-gray-400'> $5.99</Text>
       
      </View>
      <View className='flex-row justify-between'>
      <Text className='font-bold' >Order Total</Text>
      <Text className=' font-bold'> {BasketTotal +5.99}</Text>
      </View>
     
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('PreparingOrderScreen' )} className='bg-[#00CCBB] border-1 p-4 items-center m-2 rounded-lg'> 
      <Text className='text-white text-center text-lg font-bold'>Place Order </Text></TouchableOpacity>
      </View>
  </SafeAreaView>
  )
}

export default Basket