import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { ItemsTotal, selectedItems } from '../features/BasketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketTotal = () => {
 
     const items = useSelector(selectedItems)
     const Total = useSelector(ItemsTotal)
   const navigation = useNavigation()
    //  console.log('the Total Amount is',Total);

    if(items.length ===0) return null;
    
  return (
    <View className='absolute bottom-3 w-full z-50 '>
      <TouchableOpacity   onPress={()=>navigation.navigate('Basket')}  className='bg-[#00CCBB] items-center mx-5 p-4 rounded-lg'>
        <View className='flex-row space-x-1' >
       <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'> {items?.length} </Text>
       <Text className='flex-1 text-white font-extrabold text-lg text-center'> View Basket</Text>
       <Text  className='text-white font-extrabold text-lg py-1 px-2'> $ {Total ? Total : 0} </Text>
       </View>
      </TouchableOpacity>
    </View>
  )
}

export default BasketTotal