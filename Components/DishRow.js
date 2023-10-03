import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import {useDispatch,useSelector} from 'react-redux'
import { addtoBasket,selectedItemsById,removefromBasket} from '../features/BasketSlice'

const DishRow = ({id,description,name,image,price}) => {
 
   const items = useSelector((state) => selectedItemsById(state,id));
   const [pressed,setpressed] = useState(false)
   const dispatch = useDispatch()
// console.log('items in dishRow is',items);

   const addItemtoBasket = ()=>{
        dispatch(addtoBasket({id,name,description,price,image}))
      }
  const removeItemfromBasket = ()=>{
    if(items?.length <=0) return; 
    dispatch(removefromBasket(id))
  }
  return (
    <>
    <TouchableOpacity onPress={()=>setpressed(!pressed)} className={`border-y border-gray-200 p-3 bg-white ${pressed && 'border-b-0'}`}>
    <View className='flex-row '>
    <View className='flex-col flex-1 pr-2'>
      <Text className='px-2 text-lg mb-1'>{name} </Text>
      <Text className='text-gray-400 flex-wrap text-sm px-2'>{description?.slice(0,100)}.... </Text>
      <Text className='text-gray-400 px-2 mt-2'> $ {price} </Text>
    </View>

    <View className='pr-4'>
        <Image source={{uri : urlFor(image).url()}} className='w-20 h-20 ' style={{borderColor: '#F3F3F4',borderWidth:1}} />
    </View>
    </View>
    </TouchableOpacity>


    {pressed && <View className='bg-white px-4'>
      <View  className='flex-row space-x-2 pb-3 items-center'>
      <TouchableOpacity onPress={removeItemfromBasket} disabled={!items?.length} >
      <MinusCircleIcon size={40} className='rounded-full' color={items?.length >0 ?'#00CCBB' : 'gray'}  />
      </TouchableOpacity>
      <Text>{items ? items?.length : 0} </Text>
       <TouchableOpacity onPress={addItemtoBasket}>
        
      <PlusCircleIcon size={40} className='rounded-full ' color='#00CCBB' />
      </TouchableOpacity>
      </View>
    </View>
}
    </>
  )
}

export default DishRow