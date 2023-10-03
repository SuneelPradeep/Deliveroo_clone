import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {

     const navigation = useNavigation()

     useEffect(()=>{
          setTimeout(()=> (
            navigation.navigate('Delivery')
          ),4000)
     },[])


  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
      <Animatable.Image source={require('../assets/landingorder.gif')}
       size={96} iterationCount={1} animation='slideInUp'  />
     
     <Animatable.Text iterationCount={1} animation='slideInUp' 
     className='text-lg font-bold text-white text-center my-10'> 
        Waiting for Restaurant to accept your Order

     </Animatable.Text>
    
   <Progress.Circle animated={true} borderWidth={3} size={60} indeterminate={true} color='white' />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen